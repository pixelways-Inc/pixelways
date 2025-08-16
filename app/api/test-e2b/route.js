import { NextResponse } from 'next/server';
import { Sandbox } from 'e2b';
import { E2B_CONFIG } from '../../../utility/supabaseConstants';

export async function GET() {
  try {
    console.log('Testing E2B connectivity...');
    console.log('E2B API Key configured:', !!E2B_CONFIG.API_KEY);
    
    if (!E2B_CONFIG.API_KEY) {
      return NextResponse.json({ 
        error: 'E2B API key not configured',
        status: 'failed',
        config_check: false
      }, { status: 400 });
    }
    
    // Test sandbox creation with different templates
    const results = {
      status: 'testing',
      api_key_configured: true,
      templates: {},
      recommendations: []
    };
    
    // Test desktop template (8GB RAM)
    try {
      console.log('Testing desktop template...');
      const startTime = Date.now();
      const sandbox = await Sandbox.create('desktop', {
        apiKey: E2B_CONFIG.API_KEY
      });
      const endTime = Date.now();
      
      results.templates.desktop = {
        status: 'success',
        creation_time_ms: endTime - startTime,
        resources: '8GB RAM, Optimal for complex builds'
      };
      
      // Test basic operations
      try {
        const nodeVersion = await sandbox.commands.run('node --version');
        const memoryCheck = await sandbox.commands.run('free -h');
        const diskCheck = await sandbox.commands.run('df -h .');
        
        results.templates.desktop.environment = {
          node_version: nodeVersion.stdout.trim(),
          memory: memoryCheck.stdout,
          disk_space: diskCheck.stdout
        };
        
        await sandbox.close();
        console.log('Desktop template test completed successfully');
      } catch (envError) {
        results.templates.desktop.environment_error = envError.message;
        await sandbox.close();
      }
      
    } catch (error) {
      results.templates.desktop = {
        status: 'failed',
        error: error.message,
        resources: '8GB RAM, Optimal for complex builds'
      };
      console.log('Desktop template test failed:', error.message);
    }
    
    // Test code-interpreter-v1 template (1GB RAM)
    try {
      console.log('Testing code-interpreter-v1 template...');
      const startTime = Date.now();
      const sandbox = await Sandbox.create('code-interpreter-v1', {
        apiKey: E2B_CONFIG.API_KEY
      });
      const endTime = Date.now();
      
      results.templates['code-interpreter-v1'] = {
        status: 'success',
        creation_time_ms: endTime - startTime,
        resources: '1GB RAM, Good balance of resources and cost'
      };
      
      // Test basic operations
      try {
        const nodeVersion = await sandbox.commands.run('node --version');
        const memoryCheck = await sandbox.commands.run('free -h');
        const diskCheck = await sandbox.commands.run('df -h .');
        
        results.templates['code-interpreter-v1'].environment = {
          node_version: nodeVersion.stdout.trim(),
          memory: memoryCheck.stdout,
          disk_space: diskCheck.stdout
        };
        
        await sandbox.close();
        console.log('Code-interpreter-v1 template test completed successfully');
      } catch (envError) {
        results.templates['code-interpreter-v1'].environment_error = envError.message;
        await sandbox.close();
      }
      
    } catch (error) {
      results.templates['code-interpreter-v1'] = {
        status: 'failed',
        error: error.message,
        resources: '1GB RAM, Good balance of resources and cost'
      };
      console.log('Code-interpreter-v1 template test failed:', error.message);
    }
    
    // Test base template (512MB RAM)
    try {
      console.log('Testing base template...');
      const startTime = Date.now();
      const sandbox = await Sandbox.create('base', {
        apiKey: E2B_CONFIG.API_KEY
      });
      const endTime = Date.now();
      
      results.templates.base = {
        status: 'success',
        creation_time_ms: endTime - startTime,
        resources: '512MB RAM, Minimal resources, may fail on complex builds'
      };
      
      // Test basic operations
      try {
        const nodeVersion = await sandbox.commands.run('node --version');
        const memoryCheck = await sandbox.commands.run('free -h');
        const diskCheck = await sandbox.commands.run('df -h .');
        
        results.templates.base.environment = {
          node_version: nodeVersion.stdout.trim(),
          memory: memoryCheck.stdout,
          disk_space: diskCheck.stdout
        };
        
        await sandbox.close();
        console.log('Base template test completed successfully');
      } catch (envError) {
        results.templates.base.environment_error = envError.message;
        await sandbox.close();
      }
      
    } catch (error) {
      results.templates.base = {
        status: 'failed',
        error: error.message,
        resources: '512MB RAM, Minimal resources, may fail on complex builds'
      };
      console.log('Base template test failed:', error.message);
    }
    
    // Generate recommendations
    const workingTemplates = Object.entries(results.templates)
      .filter(([_, template]) => template.status === 'success')
      .map(([name, template]) => ({ name, ...template }));
    
    if (workingTemplates.length === 0) {
      results.status = 'failed';
      results.recommendations.push(
        'No E2B templates are working. Check your API key and E2B service status.',
        'Verify your E2B account has sufficient quota and credits.',
        'Contact E2B support if the issue persists.'
      );
    } else if (workingTemplates.length === 1) {
      results.status = 'limited';
      results.recommendations.push(
        `Only ${workingTemplates[0].name} template is working. This may limit deployment options.`,
        'Consider upgrading your E2B plan for access to more templates.',
        'Monitor resource usage during deployments.'
      );
    } else {
      results.status = 'success';
      results.recommendations.push(
        'Multiple templates are working. Use desktop template for optimal performance.',
        'Fall back to code-interpreter-v1 for cost-effective deployments.',
        'Use base template only for simple projects.'
      );
    }
    
    // Add deployment recommendations
    if (results.templates.desktop?.status === 'success') {
      results.recommendations.push('Use desktop template for React + Vite projects with many dependencies.');
    } else if (results.templates['code-interpreter-v1']?.status === 'success') {
      results.recommendations.push('Use code-interpreter-v1 template for most React + Vite projects.');
    } else if (results.templates.base?.status === 'success') {
      results.recommendations.push('Use base template only for simple static projects or minimal React apps.');
    }
    
    console.log('E2B connectivity test completed');
    return NextResponse.json(results);
    
  } catch (error) {
    console.error('E2B connectivity test failed:', error);
    return NextResponse.json({ 
      error: `E2B connectivity test failed: ${error.message}`,
      status: 'failed',
      api_key_configured: !!E2B_CONFIG.API_KEY
    }, { status: 500 });
  }
}
