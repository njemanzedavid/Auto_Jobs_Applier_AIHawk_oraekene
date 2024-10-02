import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Component() {
  const [config, setConfig] = useState({
    remote: true,
    experienceLevel: {
      internship: false,
      entry: true,
      associate: true,
      'mid-senior level': true,
      director: false,
      executive: false
    },
    jobTypes: {
      'full-time': true,
      contract: false,
      'part-time': false,
      temporary: true,
      internship: false,
      other: false,
      volunteer: true
    },
    date: {
      'all time': false,
      month: false,
      week: false,
      '24 hours': true
    },
    positions: ['Software engineer'],
    locations: ['Germany'],
    apply_once_at_company: true,
    distance: 100,
    company_blacklist: ['wayfair', 'Crossover'],
    title_blacklist: ['word1', 'word2'],
    job_applicants_threshold: {
      min_applicants: 0,
      max_applicants: 30
    },
    llm_model_type: 'openai',
    llm_model: 'gpt-4o-mini',
    llm_api_url: ''
  })

  const [resume, setResume] = useState({
    personal_information: {
      name: 'Liam',
      surname: 'Murphy',
      date_of_birth: '1990-05-15',
      country: 'Ireland',
      city: 'Dublin',
      address: '123 Tech Lane',
      zip_code: 'D01 F6P8',
      phone_prefix: '+353',
      phone: '871234567',
      email: 'liam.murphy@email.com',
      github: 'github.com/liammurphy',
      linkedin: 'linkedin.com/in/liammurphy'
    },
    education_details: [{
      education_level: 'Bachelor\'s Degree',
      institution: 'University College Dublin',
      field_of_study: 'Computer Science',
      final_evaluation_grade: '3.8 GPA',
      start_date: '2008-09-01',
      year_of_completion: '2012',
      exams: {
        'Data Structures': 'A',
        'Algorithms': 'A-',
        'Database Systems': 'B+',
        'Software Engineering': 'A',
        'Computer Networks': 'B',
        'Artificial Intelligence': 'A-'
      }
    }],
    experience_details: [{
      position: 'Senior Software Engineer',
      company: 'TechCorp Solutions',
      employment_period: 'January 2018 - Present',
      location: 'Dublin, Ireland',
      industry: 'Information Technology',
      key_responsibilities: [
        { responsibility_1: "Lead development of cloud-based SaaS applications" },
        { responsibility_2: "Mentor junior developers and conduct code reviews" },
        { responsibility_3: "Implement CI/CD pipelines and DevOps best practices" },
        { responsibility_4: "Collaborate with product managers to define and implement new features" }
      ],
      skills_acquired: ['AWS', 'Docker', 'Kubernetes', 'Node.js', 'React', 'GraphQL']
    },
    {
      position: 'Software Developer',
      company: 'InnovateTech',
      employment_period: 'June 2012 - December 2017',
      location: 'Cork, Ireland',
      industry: 'Software Development',
      key_responsibilities: [
        { responsibility_1: "Developed and maintained web applications using JavaScript and PHP" },
        { responsibility_2: "Collaborated with UX designers to implement responsive designs" },
        { responsibility_3: "Optimized database queries for improved application performance" }
      ],
      skills_acquired: ['JavaScript', 'PHP', 'MySQL', 'HTML5', 'CSS3', 'Git']
    }],
    projects: [{
      name: 'E-commerce Platform',
      description: 'Developed a scalable e-commerce platform using microservices architecture',
      link: 'https://github.com/liammurphy/ecommerce-platform'
    },
    {
      name: 'AI Chatbot',
      description: 'Created an AI-powered chatbot for customer support using natural language processing',
      link: 'https://github.com/liammurphy/ai-chatbot'
    }],
    achievements: [{
      name: 'Best Innovation Award',
      description: 'Received company-wide recognition for developing an AI-driven recommendation engine'
    },
    {
      name: 'Open Source Contributor',
      description: 'Active contributor to popular open-source projects in the Node.js ecosystem'
    }],
    certifications: [
      {
        name: 'AWS Certified Solutions Architect',
        description: 'Professional level certification for designing distributed systems on AWS'
      },
      {
        name: 'Certified Scrum Master',
        description: 'Certification in Agile project management and Scrum methodologies'
      }
    ],
    languages: [
      {
        language: 'English',
        proficiency: 'Native'
      },
      {
        language: 'Irish',
        proficiency: 'Fluent'
      },
      {
        language: 'French',
        proficiency: 'Intermediate'
      }
    ],
    interests: ['Machine Learning', 'Blockchain Technology', 'Hiking', 'Photography'],
    availability: {
      notice_period: '1 month'
    },
    salary_expectations: {
      salary_range_usd: '90000-120000'
    },
    self_identification: {
      gender: 'Male',
      pronouns: 'He/Him',
      veteran: 'No',
      disability: 'No',
      ethnicity: 'White Irish'
    },
    legal_authorization: {
      eu_work_authorization: 'Yes',
      us_work_authorization: 'No',
      requires_us_visa: 'Yes',
      requires_us_sponsorship: 'Yes',
      requires_eu_visa: 'No',
      legally_allowed_to_work_in_eu: 'Yes',
      legally_allowed_to_work_in_us: 'No',
      requires_eu_sponsorship: 'No',
      canada_work_authorization: 'No',
      requires_canada_visa: 'Yes',
      legally_allowed_to_work_in_canada: 'No',
      requires_canada_sponsorship: 'Yes',
      uk_work_authorization: 'Yes',
      requires_uk_visa: 'No',
      legally_allowed_to_work_in_uk: 'Yes',
      requires_uk_sponsorship: 'No'
    },
    work_preferences: {
      remote_work: 'Yes',
      in_person_work: 'Yes',
      open_to_relocation: 'Yes',
      willing_to_complete_assessments: 'Yes',
      willing_to_undergo_drug_tests: 'Yes',
      willing_to_undergo_background_checks: 'Yes'
    }
  })

  const [llmKey, setLlmKey] = useState('')

  const handleConfigChange = (key, value) => {
    setConfig(prevConfig => ({
      ...prevConfig,
      [key]: value
    }))
  }

  const handleNestedConfigChange = (parentKey, key, value) => {
    setConfig(prevConfig => ({
      ...prevConfig,
      [parentKey]: {
        ...prevConfig[parentKey],
        [key]: value
      }
    }))
  }

  const handleResumeChange = (section, key, value) => {
    setResume(prevResume => ({
      ...prevResume,
      [section]: {
        ...prevResume[section],
        [key]: value
      }
    }))
  }

  const handleArrayChange = (section, index, key, value) => {
    setResume(prevResume => ({
      ...prevResume,
      [section]: prevResume[section].map((item, i) => 
        i === index ? { ...item, [key]: value } : item
      )
    }))
  }

  const addArrayItem = (section, newItem) => {
    setResume(prevResume => ({
      ...prevResume,
      [section]: [...prevResume[section], newItem]
    }))
  }

  const removeArrayItem = (section, index) => {
    setResume(prevResume => ({
      ...prevResume,
      [section]: prevResume[section].filter((_, i) => i !== index)
    }))
  }

  const handleExamChange = (educationIndex, examName, grade) => {
    setResume(prevResume => ({
      ...prevResume,
      education_details: prevResume.education_details.map((edu, index) => 
        index === educationIndex ? { ...edu, exams: { ...edu.exams, [examName]: grade } } : edu
      )
    }))
  }

  const handleResponsibilityChange = (experienceIndex, responsibilityIndex, value) => {
    setResume(prevResume => ({
      ...prevResume,
      experience_details: prevResume.experience_details.map((exp, index) => 
        index === experienceIndex ? {
          ...exp,
          key_responsibilities: exp.key_responsibilities.map((resp, i) => 
            i === responsibilityIndex ? { [Object.keys(resp)[0]]: value } : resp
          )
        } : exp
      )
    }))
  }

  const addResponsibility = (experienceIndex) => {
    setResume(prevResume => ({
      ...prevResume,
      experience_details: prevResume.experience_details.map((exp, index) => 
        index === experienceIndex ? {
          ...exp,
          key_responsibilities: [...exp.key_responsibilities, { [`responsibility_${exp.key_responsibilities.length + 1}`]: '' }]
        } : exp
      )
    }))
  }

  const removeResponsibility = (experienceIndex, responsibilityIndex) => {
    setResume(prevResume => ({
      ...prevResume,
      experience_details: prevResume.experience_details.map((exp, index) => 
        index === experienceIndex ? {
          ...exp,
          key_responsibilities: exp.key_responsibilities.filter((_, i) => i !== responsibilityIndex)
        } : exp
      )
    }))
  }

  const handleSkillChange = (experienceIndex, skillIndex, value) => {
    setResume(prevResume => ({
      ...prevResume,
      experience_details: prevResume.experience_details.map((exp, index) => 
        index === experienceIndex ? {
          ...exp,
          skills_acquired: exp.skills_acquired.map((skill, i) => 
            i === skillIndex ? value : skill
          )
        } : exp
      )
    }))
  }

  const addSkill = (experienceIndex) => {
    setResume(prevResume => ({
      ...prevResume,
      experience_details: prevResume.experience_details.map((exp, index) => 
        index === experienceIndex ? {
          ...exp,
          skills_acquired: [...exp.skills_acquired, '']
        } : exp
      )
    }))
  }

  const removeSkill = (experienceIndex, skillIndex) => {
    setResume(prevResume => ({
      ...prevResume,
      experience_details: prevResume.experience_details.map((exp, index) => 
        index === experienceIndex ? {
          ...exp,
          skills_acquired: exp.skills_acquired.filter((_, i) => i !== skillIndex)
        } : exp
      )
    }))
  }

  const handleCertificationChange = (index, key, value) => {
    setResume(prevResume => ({
      ...prevResume,
      certifications: prevResume.certifications.map((cert, i) => 
        i === index ? { ...cert, [key]: value } : cert
      )
    }))
  }

  const addCertification = () => {
    setResume(prevResume => ({
      ...prevResume,
      certifications: [...prevResume.certifications, { name: '', description: '' }]
    }))
  }

  const removeCertification = (index) => {
    setResume(prevResume => ({
      ...prevResume,
      certifications: prevResume.certifications.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = () => {
    console.log('Config:', config)
    console.log('Resume:', resume)
    console.log('LLM Key:', llmKey)
    // Here you would typically send this data to your backend
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Job Applier Configuration</h1>
      <Tabs defaultValue="config">
        <TabsList className="mb-4">
          <TabsTrigger value="config">Config</TabsTrigger>
          <TabsTrigger value="resume">Resume</TabsTrigger>
          <TabsTrigger value="llm">LLM Key</TabsTrigger>
        </TabsList>
        <TabsContent value="config">
          <Card>
            <CardHeader>
              <CardTitle>Configuration</CardTitle>
              <CardDescription>Set your job search preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="remote"
                  checked={config.remote}
                  onCheckedChange={(checked) => handleConfigChange('remote', checked)}
                />
                <Label htmlFor="remote">Remote</Label>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="experience-level">
                  <AccordionTrigger>Experience Level</AccordionTrigger>
                  <AccordionContent>
                    {Object.entries(config.experienceLevel).map(([level, value]) => (
                      <div key={level} className="flex items-center space-x-2 mt-2">
                        <Switch
                          id={level}
                          checked={value}
                          onCheckedChange={(checked) => handleNestedConfigChange('experienceLevel', level, checked)}
                        />
                        <Label htmlFor={level}>{level}</Label>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="job-types">
                  <AccordionTrigger>Job Types</AccordionTrigger>
                  <AccordionContent>
                    {Object.entries(config.jobTypes).map(([type, value]) => (
                      <div key={type} className="flex items-center space-x-2 mt-2">
                        <Switch
                          id={type}
                          checked={value}
                          onCheckedChange={(checked) => handleNestedConfigChange('jobTypes', type, checked)}
                        />
                        <Label htmlFor={type}>{type}</Label>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="date-range">
                  <AccordionTrigger>Date Range</AccordionTrigger>
                  <AccordionContent>
                    {Object.entries(config.date).map(([range, value]) => (
                      <div key={range} className="flex items-center space-x-2 mt-2">
                        <Switch
                          id={range}
                          checked={value}
                          onCheckedChange={(checked) => handleNestedConfigChange('date', range, checked)}
                        />
                        <Label htmlFor={range}>{range}</Label>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div>
                <Label>Positions</Label>
                <Input
                  value={config.positions.join(', ')}
                  onChange={(e) => handleConfigChange('positions', e.target.value.split(', '))}
                  className="mt-1"
                />
              </div>
              <div>
                <Label>Locations</Label>
                <Input
                  value={config.locations.join(', ')}
                  onChange={(e) => handleConfigChange('locations', e.target.value.split(', '))}
                  className="mt-1"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="apply_once_at_company"
                  checked={config.apply_once_at_company}
                  onCheckedChange={(checked) => handleConfigChange('apply_once_at_company', checked)}
                />
                <Label htmlFor="apply_once_at_company">Apply once at company</Label>
              </div>
              <div>
                <Label>Distance (km)</Label>
                <Input
                  type="number"
                  value={config.distance}
                  onChange={(e) => handleConfigChange('distance', parseInt(e.target.value))}
                  className="mt-1"
                />
              </div>
              <div>
                <Label>Company Blacklist</Label>
                <Input
                  value={config.company_blacklist.join(', ')}
                  onChange={(e) => handleConfigChange('company_blacklist', e.target.value.split(', '))}
                  className="mt-1"
                />
              </div>
              <div>
                <Label>Title Blacklist</Label>
                <Input
                  value={config.title_blacklist.join(', ')}
                  onChange={(e) => handleConfigChange('title_blacklist', e.target.value.split(', '))}
                  className="mt-1"
                />
              </div>
              <div>
                <Label>Job Applicants Threshold</Label>
                <div className="flex space-x-2 mt-1">
                  <Input
                    type="number"
                    value={config.job_applicants_threshold.min_applicants}
                    onChange={(e) => handleNestedConfigChange('job_applicants_threshold', 'min_applicants', parseInt(e.target.value))}
                    placeholder="Min"
                  />
                  <Input
                    type="number"
                    value={config.job_applicants_threshold.max_applicants}
                    onChange={(e) => handleNestedConfigChange('job_applicants_threshold', 'max_applicants', parseInt(e.target.value))}
                    placeholder="Max"
                  />
                </div>
              </div>
              <div>
                <Label>LLM Model Type</Label>
                <Select value={config.llm_model_type} onValueChange={(value) => handleConfigChange('llm_model_type', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select LLM model type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="openai">OpenAI</SelectItem>
                    <SelectItem value="anthropic">Anthropic</SelectItem>
                    <SelectItem value="huggingface">Hugging Face</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>LLM Model</Label>
                <Input
                  value={config.llm_model}
                  onChange={(e) => handleConfigChange('llm_model', e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label>LLM API URL (optional)</Label>
                <Input
                  value={config.llm_api_url}
                  onChange={(e) => handleConfigChange('llm_api_url', e.target.value)}
                  className="mt-1"
                  placeholder="https://api.example.com/v1"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="resume">
          <Card>
            <CardHeader>
              <CardTitle>Resume Details</CardTitle>
              <CardDescription>Enter your resume information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="personal-information">
                  <AccordionTrigger>Personal Information</AccordionTrigger>
                  <AccordionContent>
                    {Object.entries(resume.personal_information).map(([key, value]) => (
                      <div key={key} className="mt-2">
                        <Label htmlFor={key}>{key}</Label>
                        <Input
                          id={key}
                          value={value}
                          onChange={(e) => handleResumeChange('personal_information', key, e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="education-details">
                  <AccordionTrigger>Education Details</AccordionTrigger>
                  <AccordionContent>
                    {resume.education_details.map((edu, index) => (
                      <div key={index} className="mt-4 p-4 border rounded">
                        <h4 className="font-bold mb-2">Education {index + 1}</h4>
                        {Object.entries(edu).map(([key, value]) => (
                          key !== 'exams' ? (
                            <div key={key} className="mt-2">
                              <Label htmlFor={`edu-${key}-${index}`}>{key}</Label>
                              <Input
                                id={`edu-${key}-${index}`}
                                value={value}
                                onChange={(e) => handleArrayChange('education_details', index, key, e.target.value)}
                                className="mt-1"
                              />
                            </div>
                          ) : null
                        ))}
                        <div className="mt-4">
                          <Label>Exams</Label>
                          {Object.entries(edu.exams).map(([examName, grade], examIndex) => (
                            <div key={examIndex} className="flex items-center space-x-2 mt-2">
                              <Input
                                value={examName}
                                onChange={(e) => handleExamChange(index, e.target.value, grade)}
                                placeholder="Exam name"
                                className="flex-1"
                              />
                              <Input
                                value={grade}
                                onChange={(e) => handleExamChange(index, examName, e.target.value)}
                                placeholder="Grade"
                                className="w-24"
                              />
                              <Button onClick={() => {
                                const newExams = { ...edu.exams }
                                delete newExams[examName]
                                handleArrayChange('education_details', index, 'exams', newExams)
                              }} variant="destructive">Remove</Button>
                            </div>
                          ))}
                          <Button onClick={() => handleExamChange(index, `exam_${Object.keys(edu.exams).length + 1}`, '')} className="mt-2">Add Exam</Button>
                        </div>
                        <Button onClick={() => removeArrayItem('education_details', index)} className="mt-2" variant="destructive">Remove Education</Button>
                      </div>
                    ))}
                    <Button onClick={() => addArrayItem('education_details', {
                      education_level: '',
                      institution: '',
                      field_of_study: '',
                      final_evaluation_grade: '',
                      start_date: '',
                      year_of_completion: '',
                      exams: {}
                    })} className="mt-4">Add Education</Button>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="experience-details">
                  <AccordionTrigger>Experience Details</AccordionTrigger>
                  <AccordionContent>
                    {resume.experience_details.map((exp, index) => (
                      <div key={index} className="mt-4 p-4 border rounded">
                        <h4 className="font-bold mb-2">Experience {index + 1}</h4>
                        {Object.entries(exp).map(([key, value]) => (
                          key !== 'key_responsibilities' && key !== 'skills_acquired' ? (
                            <div key={key} className="mt-2">
                              <Label htmlFor={`exp-${key}-${index}`}>{key}</Label>
                              <Input
                                id={`exp-${key}-${index}`}
                                value={value}
                                onChange={(e) => handleArrayChange('experience_details', index, key, e.target.value)}
                                className="mt-1"
                              />
                            </div>
                          ) : null
                        ))}
                        <div className="mt-4">
                          <Label>Key Responsibilities</Label>
                          {exp.key_responsibilities.map((resp, respIndex) => (
                            <div key={respIndex} className="flex items-center space-x-2 mt-2">
                              <Input
                                value={Object.values(resp)[0]}
                                onChange={(e) => handleResponsibilityChange(index, respIndex, e.target.value)}
                                placeholder="Responsibility"
                                className="flex-1"
                              />
                              <Button onClick={() => removeResponsibility(index, respIndex)} variant="destructive">Remove</Button>
                            </div>
                          ))}
                          <Button onClick={() => addResponsibility(index)} className="mt-2">Add Responsibility</Button>
                        </div>
                        <div className="mt-4">
                          <Label>Skills Acquired</Label>
                          {exp.skills_acquired.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-center space-x-2 mt-2">
                              <Input
                                value={skill}
                                onChange={(e) => handleSkillChange(index, skillIndex, e.target.value)}
                                placeholder="Skill"
                                className="flex-1"
                              />
                              <Button onClick={() => removeSkill(index, skillIndex)} variant="destructive">Remove</Button>
                            </div>
                          ))}
                          <Button onClick={() => addSkill(index)} className="mt-2">Add Skill</Button>
                        </div>
                        <Button onClick={() => removeArrayItem('experience_details', index)} className="mt-2" variant="destructive">Remove Experience</Button>
                      </div>
                    ))}
                    <Button onClick={() => addArrayItem('experience_details', {
                      position: '',
                      company: '',
                      employment_period: '',
                      location: '',
                      industry: '',
                      key_responsibilities: [],
                      skills_acquired: []
                    })} className="mt-4">Add Experience</Button>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="projects">
                  <AccordionTrigger>Projects</AccordionTrigger>
                  <AccordionContent>
                    {resume.projects.map((project, index) => (
                      <div key={index} className="mt-4 p-4 border rounded">
                        <h4 className="font-bold mb-2">Project {index + 1}</h4>
                        {Object.entries(project).map(([key, value]) => (
                          <div key={key} className="mt-2">
                            <Label htmlFor={`project-${key}-${index}`}>{key}</Label>
                            <Input
                              id={`project-${key}-${index}`}
                              value={value}
                              onChange={(e) => handleArrayChange('projects', index, key, e.target.value)}
                              className="mt-1"
                            />
                          </div>
                        ))}
                        <Button onClick={() => removeArrayItem('projects', index)} className="mt-2" variant="destructive">Remove</Button>
                      </div>
                    ))}
                    <Button onClick={() => addArrayItem('projects', { name: '', description: '', link: '' })} className="mt-4">Add Project</Button>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="achievements">
                  <AccordionTrigger>Achievements</AccordionTrigger>
                  <AccordionContent>
                    {resume.achievements.map((achievement, index) => (
                      <div key={index} className="mt-4 p-4 border rounded">
                        <h4 className="font-bold mb-2">Achievement {index + 1}</h4>
                        {Object.entries(achievement).map(([key, value]) => (
                          <div key={key} className="mt-2">
                            <Label htmlFor={`achievement-${key}-${index}`}>{key}</Label>
                            <Input
                              id={`achievement-${key}-${index}`}
                              value={value}
                              onChange={(e) => handleArrayChange('achievements', index, key, e.target.value)}
                              className="mt-1"
                            />
                          </div>
                        ))}
                        <Button onClick={() => removeArrayItem('achievements', index)} className="mt-2" variant="destructive">Remove</Button>
                      </div>
                    ))}
                    <Button onClick={() => addArrayItem('achievements', { name: '', description: '' })} className="mt-4">Add Achievement</Button>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="certifications">
                  <AccordionTrigger>Certifications</AccordionTrigger>
                  <AccordionContent>
                    {resume.certifications.map((cert, index) => (
                      <div key={index} className="mt-4 p-4 border rounded">
                        <h4 className="font-bold mb-2">Certification {index + 1}</h4>
                        <div className="mt-2">
                          <Label htmlFor={`cert-name-${index}`}>Name</Label>
                          <Input
                            id={`cert-name-${index}`}
                            value={cert.name}
                            onChange={(e) => handleCertificationChange(index, 'name', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <div className="mt-2">
                          <Label htmlFor={`cert-description-${index}`}>Description</Label>
                          <Textarea
                            id={`cert-description-${index}`}
                            value={cert.description}
                            onChange={(e) => handleCertificationChange(index, 'description', e.target.value)}
                            className="mt-1"
                          />
                        </div>
                        <Button onClick={() => removeCertification(index)} className="mt-2" variant="destructive">Remove</Button>
                      </div>
                    ))}
                    <Button onClick={addCertification} className="mt-4">Add Certification</Button>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="languages">
                  <AccordionTrigger>Languages</AccordionTrigger>
                  <AccordionContent>
                    {resume.languages.map((lang, index) => (
                      <div key={index} className="mt-4 p-4 border rounded">
                        <h4 className="font-bold mb-2">Language {index + 1}</h4>
                        {Object.entries(lang).map(([key, value]) => (
                          <div key={key} className="mt-2">
                            <Label htmlFor={`lang-${key}-${index}`}>{key}</Label>
                            <Input
                              id={`lang-${key}-${index}`}
                              value={value}
                              onChange={(e) => handleArrayChange('languages', index, key, e.target.value)}
                              className="mt-1"
                            />
                          </div>
                        ))}
                        <Button onClick={() => removeArrayItem('languages', index)} className="mt-2" variant="destructive">Remove</Button>
                      </div>
                    ))}
                    <Button onClick={() => addArrayItem('languages', { language: '', proficiency: '' })} className="mt-4">Add Language</Button>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="interests">
                  <AccordionTrigger>Interests</AccordionTrigger>
                  <AccordionContent>
                    <Input
                      value={resume.interests.join(', ')}
                      onChange={(e) => handleResumeChange('interests', null, e.target.value.split(', '))}
                      className="mt-1"
                      placeholder="Enter interests separated by commas"
                    />
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="availability">
                  <AccordionTrigger>Availability</AccordionTrigger>
                  <AccordionContent>
                    <div className="mt-2">
                      <Label htmlFor="notice-period">Notice Period</Label>
                      <Input
                        id="notice-period"
                        value={resume.availability.notice_period}
                        onChange={(e) => handleResumeChange('availability', 'notice_period', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="salary-expectations">
                  <AccordionTrigger>Salary Expectations</AccordionTrigger>
                  <AccordionContent>
                    <div className="mt-2">
                      <Label htmlFor="salary-range">Salary Range (USD)</Label>
                      <Input
                        id="salary-range"
                        value={resume.salary_expectations.salary_range_usd}
                        onChange={(e) => handleResumeChange('salary_expectations', 'salary_range_usd', e.target.value)}
                        className="mt-1"
                        placeholder="e.g. 50000-70000"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="self-identification">
                  <AccordionTrigger>Self Identification</AccordionTrigger>
                  <AccordionContent>
                    {Object.entries(resume.self_identification).map(([key, value]) => (
                      <div key={key} className="mt-2">
                        <Label htmlFor={`self-id-${key}`}>{key}</Label>
                        <Input
                          id={`self-id-${key}`}
                          value={value}
                          onChange={(e) => handleResumeChange('self_identification', key, e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="legal-authorization">
                  <AccordionTrigger>Legal Authorization</AccordionTrigger>
                  <AccordionContent>
                    {Object.entries(resume.legal_authorization).map(([key, value]) => (
                      <div key={key} className="mt-2">
                        <Label htmlFor={`legal-auth-${key}`}>{key}</Label>
                        <Select value={value} onValueChange={(newValue) => handleResumeChange('legal_authorization', key, newValue)}>
                          <SelectTrigger id={`legal-auth-${key}`} className="mt-1">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="work-preferences">
                  <AccordionTrigger>Work Preferences</AccordionTrigger>
                  <AccordionContent>
                    {Object.entries(resume.work_preferences).map(([key, value]) => (
                      <div key={key} className="mt-2">
                        <Label htmlFor={`work-pref-${key}`}>{key}</Label>
                        <Select value={value} onValueChange={(newValue) => handleResumeChange('work_preferences', key, newValue)}>
                          <SelectTrigger id={`work-pref-${key}`} className="mt-1">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="llm">
          <Card>
            <CardHeader>
              <CardTitle>LLM API Key</CardTitle>
              <CardDescription>Enter your LLM API key</CardDescription>
            </CardHeader>
            <CardContent>
              <Input
                type="password"
                value={llmKey}
                onChange={(e) => setLlmKey(e.target.value)}
                placeholder="Enter your LLM API key"
              />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Button onClick={handleSubmit} className="mt-4">Save Configuration</Button>
    </div>
  )
}