import { describe, it, expect } from 'vitest';
import { personalInfo, skills, projects } from '../data/portfolioData';

describe('portfolioData', () => {
  it('personalInfo has all required fields', () => {
    expect(personalInfo.name).toBeTruthy();
    expect(personalInfo.email).toBeTruthy();
    expect(personalInfo.github).toBeTruthy();
    expect(personalInfo.linkedin).toBeTruthy();
    expect(personalInfo.bio).toBeTruthy();
  });

  it('skills has categories with technologies', () => {
    expect(skills.length).toBeGreaterThan(0);
    skills.forEach((category) => {
      expect(category.technologies.length).toBeGreaterThan(0);
    });
  });

  it('projects have required fields', () => {
    expect(projects.length).toBeGreaterThan(0);
    projects.forEach((project) => {
      expect(project.id).toBeDefined();
      expect(project.title).toBeTruthy();
      expect(project.description).toBeTruthy();
      expect(project.technologies.length).toBeGreaterThan(0);
    });
  });
});
