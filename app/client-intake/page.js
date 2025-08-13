import React, { useState } from 'react';
import { supabase } from '../../utility/supabaseClient';

const ClientIntakePage = () => {
  const [formData, setFormData] = useState({
    business_name: '',
    business_email: '',
    phone_number: '',
    website: '',
    industry: '',
    project_type: '',
    description: '',
    preferred_colors: '',
    target_audience: '',
    competitors: '',
    budget_range: '',
    deadline: '',
    special_requirements: '',
  });
  const [logoFile, setLogoFile] = useState(null);
  const [otherFiles, setOtherFiles] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogoFileChange = (e) => {
    setLogoFile(e.target.files[0]);
  };

  const handleOtherFilesChange = (e) => {
    setOtherFiles(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    try {
      let logo_url = null;
      if (logoFile) {
        const logoFileName = `${formData.business_name}/logo/${logoFile.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('quotes')
          .upload(logoFileName, logoFile, { cacheControl: '3600', upsert: false });

        if (uploadError) throw uploadError;
        logo_url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/quotes/${logoFileName}`;
      }

      const uploadedFileUrls = [];
      for (const file of otherFiles) {
        const otherFileName = `${formData.business_name}/other_files/${file.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('quotes')
          .upload(otherFileName, file, { cacheControl: '3600', upsert: false });

        if (uploadError) throw uploadError;
        uploadedFileUrls.push(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/quotes/${otherFileName}`);
      }

      const { data, error: insertError } = await supabase
        .from('client_intake')
        .insert({
          ...formData,
          logo_url: logo_url,
          uploaded_files: uploadedFileUrls.length > 0 ? uploadedFileUrls : null,
        });

      if (insertError) throw insertError;

      setMessage('Client intake form submitted successfully!');
      setFormData({
        business_name: '',
        business_email: '',
        phone_number: '',
        website: '',
        industry: '',
        project_type: '',
        description: '',
        preferred_colors: '',
        target_audience: '',
        competitors: '',
        budget_range: '',
        deadline: '',
        special_requirements: '',
      });
      setLogoFile(null);
      setOtherFiles([]);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(`Failed to submit form: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h1>Client Intake Form</h1>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '15px' }}>
        <label>
          Business Name:
          <input type="text" name="business_name" value={formData.business_name} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
        </label>
        <label>
          Business Email:
          <input type="email" name="business_email" value={formData.business_email} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
        </label>
        <label>
          Phone Number:
          <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
        </label>
        <label>
          Website:
          <input type="url" name="website" value={formData.website} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
        </label>
        <label>
          Industry:
          <input type="text" name="industry" value={formData.industry} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
        </label>
        <label>
          Project Type:
          <input type="text" name="project_type" value={formData.project_type} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
        </label>
        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleChange} style={{ width: '100%', padding: '8px', minHeight: '100px' }}></textarea>
        </label>
        <label>
          Preferred Colors:
          <input type="text" name="preferred_colors" value={formData.preferred_colors} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
        </label>
        <label>
          Target Audience:
          <input type="text" name="target_audience" value={formData.target_audience} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
        </label>
        <label>
          Competitors:
          <input type="text" name="competitors" value={formData.competitors} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
        </label>
        <label>
          Budget Range:
          <input type="text" name="budget_range" value={formData.budget_range} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
        </label>
        <label>
          Deadline:
          <input type="text" name="deadline" value={formData.deadline} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
        </label>
        <label>
          Special Requirements:
          <textarea name="special_requirements" value={formData.special_requirements} onChange={handleChange} style={{ width: '100%', padding: '8px', minHeight: '100px' }}></textarea>
        </label>
        <label>
          Upload Logo:
          <input type="file" accept="image/*" onChange={handleLogoFileChange} style={{ width: '100%', padding: '8px' }} />
        </label>
        <label>
          Upload Other Files (e.g., images, documents):
          <input type="file" multiple onChange={handleOtherFilesChange} style={{ width: '100%', padding: '8px' }} />
        </label>
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
};

export default ClientIntakePage;
