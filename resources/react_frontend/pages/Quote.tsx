import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, ArrowLeft, Calculator, FileText, Phone } from 'lucide-react';

const Quote: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Project Information
    projectType: '',
    spaceSize: '',
    currentLighting: '',
    buildingType: '',
    
    // Step 2: Technical Details
    ceilingHeight: '',
    hoursOfOperation: '',
    specialRequirements: [],
    dimming: '',
    
    // Step 3: Contact Information
    name: '',
    email: '',
    company: '',
    phone: '',
    address: '',
    timeline: '',
    budget: '',
    
    // Step 4: Additional Information
    currentElectricalSetup: '',
    maintenanceConcerns: '',
    energyGoals: '',
    additionalNotes: ''
  });

  const steps = [
    { number: 1, title: 'Project Type', description: 'Tell us about your space' },
    { number: 2, title: 'Requirements', description: 'Lighting specifications' },
    { number: 3, title: 'Contact Info', description: 'Your details' },
    { number: 4, title: 'Additional Info', description: 'Final details' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (value: string) => {
    const currentRequirements = formData.specialRequirements;
    const updatedRequirements = currentRequirements.includes(value)
      ? currentRequirements.filter(req => req !== value)
      : [...currentRequirements, value];
    
    setFormData({
      ...formData,
      specialRequirements: updatedRequirements
    });
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote form submitted:', formData);
    // Handle form submission
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          What type of project is this? *
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            'Office/Corporate',
            'Retail Store',
            'Warehouse/Industrial',
            'Healthcare Facility',
            'Educational Institution',
            'Outdoor/Parking',
            'Hospitality',
            'Other'
          ].map(type => (
            <label key={type} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-300">
              <input
                type="radio"
                name="projectType"
                value={type}
                checked={formData.projectType === type}
                onChange={handleInputChange}
                className="mr-3"
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Approximate space size (square feet) *
        </label>
        <select
          name="spaceSize"
          value={formData.spaceSize}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        >
          <option value="">Select space size</option>
          <option value="under-1000">Under 1,000 sq ft</option>
          <option value="1000-5000">1,000 - 5,000 sq ft</option>
          <option value="5000-10000">5,000 - 10,000 sq ft</option>
          <option value="10000-25000">10,000 - 25,000 sq ft</option>
          <option value="25000-50000">25,000 - 50,000 sq ft</option>
          <option value="over-50000">Over 50,000 sq ft</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Current lighting type *
        </label>
        <select
          name="currentLighting"
          value={formData.currentLighting}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        >
          <option value="">Select current lighting</option>
          <option value="fluorescent">Fluorescent</option>
          <option value="incandescent">Incandescent</option>
          <option value="halogen">Halogen</option>
          <option value="metal-halide">Metal Halide</option>
          <option value="led">LED (upgrade/replacement)</option>
          <option value="mixed">Mixed lighting types</option>
          <option value="new-construction">New construction</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Building type
        </label>
        <select
          name="buildingType"
          value={formData.buildingType}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select building type</option>
          <option value="new">New construction</option>
          <option value="existing">Existing building</option>
          <option value="renovation">Renovation/remodel</option>
        </select>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Ceiling height
        </label>
        <select
          name="ceilingHeight"
          value={formData.ceilingHeight}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select ceiling height</option>
          <option value="8-10ft">8-10 feet</option>
          <option value="10-12ft">10-12 feet</option>
          <option value="12-15ft">12-15 feet</option>
          <option value="15-20ft">15-20 feet</option>
          <option value="20-25ft">20-25 feet</option>
          <option value="over-25ft">Over 25 feet</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Hours of operation per day
        </label>
        <select
          name="hoursOfOperation"
          value={formData.hoursOfOperation}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select hours</option>
          <option value="8-hours">8 hours</option>
          <option value="12-hours">12 hours</option>
          <option value="16-hours">16 hours</option>
          <option value="24-hours">24 hours</option>
          <option value="variable">Variable</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Special requirements (select all that apply)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            'Emergency lighting',
            'Motion sensors',
            'Daylight harvesting',
            'Smart controls',
            'High CRI lighting',
            'Anti-glare requirements',
            'Waterproof/outdoor',
            'Food-safe environment'
          ].map(requirement => (
            <label key={requirement} className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-blue-50 hover:border-blue-300">
              <input
                type="checkbox"
                checked={formData.specialRequirements.includes(requirement)}
                onChange={() => handleCheckboxChange(requirement)}
                className="mr-3"
              />
              {requirement}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Dimming requirements
        </label>
        <select
          name="dimming"
          value={formData.dimming}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select dimming needs</option>
          <option value="no-dimming">No dimming needed</option>
          <option value="manual-dimming">Manual dimming</option>
          <option value="automatic-dimming">Automatic dimming</option>
          <option value="smart-dimming">Smart/programmable dimming</option>
        </select>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company/Organization
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Project Address
        </label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Street address, city, state, zip code"
        ></textarea>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Timeline
          </label>
          <select
            name="timeline"
            value={formData.timeline}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select timeline</option>
            <option value="immediate">Immediate (Within 30 days)</option>
            <option value="soon">Soon (1-3 months)</option>
            <option value="planning">Planning (3-6 months)</option>
            <option value="future">Future (6+ months)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Estimated Budget
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select budget range</option>
            <option value="under-10k">Under $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="over-100k">Over $100,000</option>
            <option value="not-sure">Not sure</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Current electrical setup
        </label>
        <textarea
          name="currentElectricalSetup"
          value={formData.currentElectricalSetup}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Describe your current electrical infrastructure, any known limitations, etc."
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Maintenance concerns
        </label>
        <textarea
          name="maintenanceConcerns"
          value={formData.maintenanceConcerns}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Any specific maintenance challenges or requirements?"
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Energy efficiency goals
        </label>
        <textarea
          name="energyGoals"
          value={formData.energyGoals}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="What are your energy savings targets? Any sustainability certifications you're pursuing?"
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Additional notes
        </label>
        <textarea
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Any other information that would help us provide an accurate quote?"
        ></textarea>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get Your Free Quote
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Complete our detailed form to receive a comprehensive LED lighting proposal
          </motion.p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                    currentStep >= step.number 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {currentStep > step.number ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <div className="ml-3 hidden md:block">
                    <div className={`text-sm font-medium ${
                      currentStep >= step.number ? 'text-blue-600' : 'text-gray-500'
                    }`}>
                      {step.title}
                    </div>
                    <div className="text-xs text-gray-500">{step.description}</div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Step {currentStep}: {steps[currentStep - 1].title}
              </h2>

              <form onSubmit={handleSubmit}>
                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}
                {currentStep === 4 && renderStep4()}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all ${
                      currentStep === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Previous
                  </button>

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                    >
                      Next
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                    >
                      <Calculator className="h-5 w-5 mr-2" />
                      Get My Quote
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12">What Happens Next?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Review & Analysis</h3>
                <p className="text-gray-600">
                  Our experts review your requirements and analyze your space for optimal LED solutions.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Consultation Call</h3>
                <p className="text-gray-600">
                  We'll schedule a call to discuss your project in detail and answer any questions.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calculator className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Custom Proposal</h3>
                <p className="text-gray-600">
                  Receive a detailed proposal with specifications, pricing, and ROI calculations within 48 hours.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Quote;