import * as core from '@actions/core';
import * as fs from 'fs';
import * as path from 'path';

async function run(): Promise<void> {
  try {
    const requiredFiles = core.getInput('required-files').split(',').map(f => f.trim());
    const basePath = core.getInput('base-path');

    core.info(`Checking for required files: ${requiredFiles.join(', ')}`);
    
    const missingFiles: string[] = [];

    for (const file of requiredFiles) {
      const filePath = path.join(basePath, file);
      if (!fs.existsSync(filePath)) {
        missingFiles.push(file);
      }
    }

    if (missingFiles.length > 0) {
      core.setFailed(`Missing required files: ${missingFiles.join(', ')}`);
      return;
    }

    core.info('All required files are present! ✅');
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

run(); 