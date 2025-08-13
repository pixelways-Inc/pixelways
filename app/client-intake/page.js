"use client";
import React, { useState } from 'react';
import { supabase } from '../../utility/supabaseClient';
import PageBanner from "@/components/PageBanner";
import TekprofLayout from "@/layout/TekprofLayout";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

const ClientIntakePage = () => {
  // Define options for dropdowns
  const projectTypeOptions = [
    'Website Design',
    'Mobile App Development',
    'Custom Software Development',
    'E-commerce Solution',
    'UI/UX Design',
    'Digital Marketing',
    'Branding & Identity',
    'Consulting',
    'Other',
  ];

  const businessTypeOptions = [
    'Technology',
    'Healthcare',
    'Finance',
    'Retail',
    'Education',
    'Manufacturing',
    'Hospitality',
    'Real Estate',
    'Non-profit',
    'Other',
  ];

  const colorOptions = [
    'Red',
    'Blue',
    'Green',
    'Yellow',
    'Purple',
    'Orange',
    'Black',
    'White',
    'Gray',
    'Other',
  ];

  const [formData, setFormData] = useState({
    business_name: '',
    business_email: '',
    phone_number: '', // Will be handled by PhoneInput
    website: '',
    description: '',
    target_audience: '',
    competitors: '',
    budget_range: '',
    deadline: '',
    special_requirements: '',
  });

  const [selectedProjectTypes, setSelectedProjectTypes] = useState([]);
  const [otherProjectType, setOtherProjectType] = useState('');
  const [selectedBusinessTypes, setSelectedBusinessTypes] = useState([]);
  const [otherBusinessType, setOtherBusinessType] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [otherColor, setOtherColor] = useState('');

  const [logoFile, setLogoFile] = useState(null);
  const [otherFiles, setOtherFiles] = useState([]);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, options } = e.target;

    if (name === 'project_type') {
      const selected = Array.from(options)
        .filter(option => option.selected)
        .map(option => option.value);
      setSelectedProjectTypes(selected);
      if (!selected.includes('Other')) {
        setOtherProjectType('');
      }
    } else if (name === 'business_type') {
      const selected = Array.from(options)
        .filter(option => option.selected)
        .map(option => option.value);
      setSelectedBusinessTypes(selected);
      if (!selected.includes('Other')) {
        setOtherBusinessType('');
      }
    } else if (name === 'preferred_colors') {
      const selected = Array.from(options)
        .filter(option => option.selected)
        .map(option => option.value);
      setSelectedColors(selected);
      if (!selected.includes('Other')) {
        setOtherColor('');
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleOtherInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'other_project_type') {
      setOtherProjectType(value);
    } else if (name === 'other_business_type') {
      setOtherBusinessType(value);
    } else if (name === 'other_color') {
      setOtherColor(value);
    }
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
      // Logo upload (optional)
      if (logoFile) {
        const logoFileName = `${formData.business_name}/logo/${logoFile.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('quotes')
          .upload(logoFileName, logoFile, { cacheControl: '3600', upsert: false });
        if (uploadError) throw uploadError;
        logo_url = `https://dlunpilhklsgvkegnnlp.supabase.co/storage/v1/object/public/quotes/${logoFileName}`;
      }

      // Restrict to max 3 files (optional)
      const uploadedFileUrls = [];
      const filesToUpload = otherFiles.slice(0, 3);
      for (const file of filesToUpload) {
        const otherFileName = `${formData.business_name}/other_files/${file.name}`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('quotes')
          .upload(otherFileName, file, { cacheControl: '3600', upsert: false });
        if (uploadError) throw uploadError;
        uploadedFileUrls.push(`https://dlunpilhklsgvkegnnlp.supabase.co/storage/v1/object/public/quotes/${otherFileName}`);
      }

      // Generate client_id (simple UUID)
      const client_id = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 18);

      const { data, error: insertError } = await supabase
        .from('client_intake')
        .insert({
          client_id,
          ...formData,
          project_type: selectedProjectTypes.includes('Other') ? `${selectedProjectTypes.filter(t => t !== 'Other').join(', ')}${otherProjectType ? `, Other: ${otherProjectType}` : ''}` : selectedProjectTypes.join(', '),
          industry: selectedBusinessTypes.includes('Other') ? `${selectedBusinessTypes.filter(t => t !== 'Other').join(', ')}${otherBusinessType ? `, Other: ${otherBusinessType}` : ''}` : selectedBusinessTypes.join(', '),
          preferred_colors: selectedColors.includes('Other') ? `${selectedColors.filter(c => c !== 'Other').join(', ')}${otherColor ? `, Other: ${otherColor}` : ''}` : selectedColors.join(', '),
          logo_url: logo_url || null,
          uploaded_files: uploadedFileUrls.length > 0 ? uploadedFileUrls : null,
        });

      if (insertError) throw insertError;

      setMessage('🎉 Congratulations! Your service request has been received and our team will contact you soon.\nIf you need immediate assistance, feel free to reach out to us at hello@pixelways.co. 🚀');
      setFormData({
        business_name: '',
        business_email: '',
        phone_number: '',
        website: '',
        description: '',
        target_audience: '',
        competitors: '',
        budget_range: '',
        deadline: '',
        special_requirements: '',
      });
      setSelectedProjectTypes([]);
      setOtherProjectType('');
      setSelectedBusinessTypes([]);
      setOtherBusinessType('');
      setSelectedColors([]);
      setOtherColor('');
      setLogoFile(null);
      setOtherFiles([]);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(`Failed to submit form: ${err.message}`);
    }
  };

  return (
    <TekprofLayout>
      <PageBanner pageName="Client Intake" />
      <section className="contact-form-area pt-130 rpt-100 pb-120 rpb-90">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-10 col-lg-12 col-md-12 mx-auto">
              <div
                className="contact-page-form z-1 rel"
                data-aos="fade-up"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <h4>Client Intake Form</h4>
                <p>Please fill out the form below to provide details about your project.</p>
                {message && <p style={{ color: 'green' }}>{message}</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit} className="contactForm">
                  <div className="row mt-20">
                    <div className="col-sm-6">
                      <div className="form-group mb-15">
                        <label htmlFor="business_name">Business Name</label>
                        <input type="text" id="business_name" name="business_name" value={formData.business_name} onChange={handleChange} required className="form-control" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group mb-15">
                        <label htmlFor="business_email">Business Email</label>
                        <input type="email" id="business_email" name="business_email" value={formData.business_email} onChange={handleChange} required className="form-control" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group mb-15">
                        <label htmlFor="phone_number">Phone Number</label>
                        <PhoneInput
                          id="phone_number"
                          name="phone_number"
                          placeholder="Enter phone number"
                          value={formData.phone_number}
                          onChange={(value) => setFormData({ ...formData, phone_number: value })}
                          defaultCountry="US" // You can set a default country
                          country={formData.phone_number ? undefined : 'US'} // Set country based on value or default
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group mb-15">
                        <label htmlFor="website">Website</label>
                        <input type="url" id="website" name="website" value={formData.website} onChange={handleChange} className="form-control" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group mb-15">
                        <label htmlFor="business_type">Business Type</label>
                        <select id="business_type" name="business_type" multiple value={selectedBusinessTypes} onChange={handleChange} className="form-control">
                          {businessTypeOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                      {selectedBusinessTypes.includes('Other') && (
                        <div className="form-group mb-15">
                          <label htmlFor="other_business_type">Specify Other Business Type</label>
                          <input type="text" id="other_business_type" name="other_business_type" value={otherBusinessType} onChange={handleOtherInputChange} className="form-control" />
                        </div>
                      )}
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group mb-15">
                        <label htmlFor="project_type">Project Type</label>
                        <select id="project_type" name="project_type" multiple value={selectedProjectTypes} onChange={handleChange} className="form-control">
                          {projectTypeOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                      {selectedProjectTypes.includes('Other') && (
                        <div className="form-group mb-15">
                          <label htmlFor="other_project_type">Specify Other Project Type</label>
                          <input type="text" id="other_project_type" name="other_project_type" value={otherProjectType} onChange={handleOtherInputChange} className="form-control" />
                        </div>
                      )}
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group mb-15">
                        <label htmlFor="description">Description</label>
                        <textarea id="description" name="description" value={formData.description} onChange={handleChange} className="form-control" rows={4}></textarea>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group mb-15">
                        <label htmlFor="preferred_colors">Preferred Colors</label>
                        <select id="preferred_colors" name="preferred_colors" multiple value={selectedColors} onChange={handleChange} className="form-control">
                          {colorOptions.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                      </div>
                      {selectedColors.includes('Other') && (
                        <div className="form-group mb-15">
                          <label htmlFor="other_color">Specify Other Color</label>
                          <input type="text" id="other_color" name="other_color" value={otherColor} onChange={handleOtherInputChange} className="form-control" />
                        </div>
                      )}
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group mb-15">
                        <label htmlFor="target_audience">Target Audience</label>
                        <input type="text" id="target_audience" name="target_audience" value={formData.target_audience} onChange={handleChange} className="form-control" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group mb-15">
                        <label htmlFor="competitors">Competitors</label>
                        <input type="text" id="competitors" name="competitors" value={formData.competitors} onChange={handleChange} className="form-control" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group mb-15">
                        <label htmlFor="budget_range">Budget Range</label>
                        <input type="text" id="budget_range" name="budget_range" value={formData.budget_range} onChange={handleChange} className="form-control" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group mb-15">
                        <label htmlFor="deadline">Deadline</label>
                        <input type="text" id="deadline" name="deadline" value={formData.deadline} onChange={handleChange} className="form-control" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group mb-25">
                        <label htmlFor="special_requirements">Special Requirements</label>
                        <textarea id="special_requirements" name="special_requirements" value={formData.special_requirements} onChange={handleChange} className="form-control" rows={4}></textarea>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group mb-15">
                        <label htmlFor="logo_file">Upload Logo</label>
                        <input type="file" id="logo_file" accept="image/*" onChange={handleLogoFileChange} className="form-control" />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group mb-15">
                        <label htmlFor="other_files">Upload Other Files</label>
                        <input type="file" id="other_files" multiple onChange={handleOtherFilesChange} className="form-control" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group mb-0">
                        <button type="submit" className="theme-btn" data-hover="Submit Form">
                          <span>Submit Form</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </TekprofLayout>
  );
};

export default ClientIntakePage;