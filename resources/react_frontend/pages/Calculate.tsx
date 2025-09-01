import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Zap, DollarSign, TrendingUp, Info } from 'lucide-react';

const Calculate: React.FC = () => {
  const [formData, setFormData] = useState({
    area: '',
    unit: 'sqft',
    spaceType: 'office',
    ceilingHeight: '10',
    currentLighting: 'fluorescent',
    hoursPerDay: '10',
    daysPerWeek: '5',
    electricityRate: '0.12',
    pixelPitch: '2.5',
    cabinetSize: '500x500'
  });

  const [results, setResults] = useState({
    fixturesNeeded: 0,
    totalLumens: 0,
    equipmentCost: 0,
    installationCost: 0,
    totalProjectCost: 0,
    currentEnergyUse: 0,
    newEnergyUse: 0,
    energySavings: 0,
    savingsPercentage: 0,
    paybackPeriod: 0,
    tenYearSavings: 0,
    maintenanceSavings: 0,
    totalCabinets: 0,
    totalPowerConsumption: 0,
    cabinetsPerLoop: 0,
    recommendedWireSize: ''
  });

  const spaceTypes = {
    office: { lumensPerSqFt: 50, wattPerSqFt: 1.2 },
    retail: { lumensPerSqFt: 75, wattPerSqFt: 2.0 },
    warehouse: { lumensPerSqFt: 30, wattPerSqFt: 0.8 },
    healthcare: { lumensPerSqFt: 100, wattPerSqFt: 2.5 },
    education: { lumensPerSqFt: 60, wattPerSqFt: 1.5 },
    restaurant: { lumensPerSqFt: 40, wattPerSqFt: 1.8 }
  };

  const cabinetSizes = [
    { value: '500x500', label: '500mm x 500mm' },
    { value: '500x1000', label: '500mm x 1000mm' },
    { value: '640x480', label: '640mm x 480mm' },
    { value: '960x960', label: '960mm x 960mm' },
    { value: '1000x500', label: '1000mm x 500mm' },
    { value: 'custom', label: 'Custom Size' }
  ];

  const getCabinetDimensions = (cabinetSize: string) => {
    const dimensions = {
      '500x500': { width: 0.5, height: 0.5, power: 150 },
      '500x1000': { width: 0.5, height: 1.0, power: 300 },
      '640x480': { width: 0.64, height: 0.48, power: 200 },
      '960x960': { width: 0.96, height: 0.96, power: 400 },
      '1000x500': { width: 1.0, height: 0.5, power: 250 },
      'custom': { width: 1.0, height: 1.0, power: 200 }
    };
    return dimensions[cabinetSize as keyof typeof dimensions] || dimensions['500x500'];
  };

  const calculateWireSize = (totalPower: number, cabinetsPerLoop: number) => {
    const powerPerLoop = (totalPower / Math.ceil(totalPower / (cabinetsPerLoop * 200))) || 0;
    const current = powerPerLoop / 220; // Assuming 220V system
    
    if (current <= 10) return '2.5mm² (12 AWG)';
    if (current <= 16) return '4mm² (10 AWG)';
    if (current <= 25) return '6mm² (8 AWG)';
    if (current <= 32) return '10mm² (6 AWG)';
    if (current <= 40) return '16mm² (4 AWG)';
    return '25mm² (2 AWG)';
  };

  useEffect(() => {
    calculateResults();
  }, [formData]);

  const calculateResults = () => {
    const area = parseFloat(formData.area) || 0;
    const areaInSqFt = formData.unit === 'sqm' ? area * 10.764 : area;
    
    if (isNaN(area) || area <= 0) {
      setResults({
        fixturesNeeded: 0,
        totalLumens: 0,
        equipmentCost: 0,
        installationCost: 0,
        totalProjectCost: 0,
        currentEnergyUse: 0,
        newEnergyUse: 0,
        energySavings: 0,
        savingsPercentage: 0,
        paybackPeriod: 0,
        tenYearSavings: 0,
        maintenanceSavings: 0,
        totalCabinets: 0,
        totalPowerConsumption: 0,
        cabinetsPerLoop: 0,
        recommendedWireSize: ''
      });
      return;
    }

    const spaceConfig = spaceTypes[formData.spaceType as keyof typeof spaceTypes];
    const totalLumens = areaInSqFt * spaceConfig.lumensPerSqFt;
    const fixturesNeeded = Math.ceil(totalLumens / 4000); // Assuming 4000 lumens per fixture
    
    // Cost calculations
    const equipmentCost = fixturesNeeded * 150; // $150 per LED fixture
    const installationCost = fixturesNeeded * 75; // $75 installation per fixture
    const totalProjectCost = equipmentCost + installationCost;
    
    // Energy calculations
    const hoursPerYear = parseFloat(formData.hoursPerDay) * parseFloat(formData.daysPerWeek) * 52;
    const currentWatts = areaInSqFt * spaceConfig.wattPerSqFt;
    const newWatts = areaInSqFt * (spaceConfig.wattPerSqFt * 0.4); // 60% energy reduction
    
    const currentEnergyUse = (currentWatts * hoursPerYear) / 1000; // kWh
    const newEnergyUse = (newWatts * hoursPerYear) / 1000; // kWh
    const energySavings = currentEnergyUse - newEnergyUse;
    const savingsPercentage = ((energySavings / currentEnergyUse) * 100);
    
    const electricityRate = parseFloat(formData.electricityRate);
    const annualSavings = energySavings * electricityRate;
    const paybackPeriod = totalProjectCost / annualSavings;
    const tenYearSavings = (annualSavings * 10) - totalProjectCost;
    const maintenanceSavings = fixturesNeeded * 50 * 10; // $50 per fixture over 10 years
    
    // LED Cabinet Calculations
    const cabinetDims = getCabinetDimensions(formData.cabinetSize);
    const cabinetArea = cabinetDims.width * cabinetDims.height; // in square meters
    const totalCabinets = cabinetArea > 0 ? Math.ceil(areaInSqFt * 0.092903 / cabinetArea) : 0; // Convert sq ft to sq m
    const totalPowerConsumption = totalCabinets * cabinetDims.power; // in watts
    const maxPowerPerLoop = 3000; // 3kW per loop (typical electrical limit)
    const cabinetsPerLoop = Math.floor(maxPowerPerLoop / cabinetDims.power);
    const recommendedWireSize = calculateWireSize(totalPowerConsumption, cabinetsPerLoop);
    
    setResults({
      fixturesNeeded,
      totalLumens: Math.round(totalLumens),
      equipmentCost,
      installationCost,
      totalProjectCost,
      currentEnergyUse: Math.round(currentEnergyUse),
      newEnergyUse: Math.round(newEnergyUse),
      energySavings: Math.round(energySavings),
      savingsPercentage: Math.round(savingsPercentage),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      tenYearSavings: Math.round(tenYearSavings),
      maintenanceSavings,
      totalCabinets,
      totalPowerConsumption,
      cabinetsPerLoop,
      recommendedWireSize
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Calculator className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            LED Lighting Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate LED lighting requirements, costs, and energy savings for your project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Details</h2>
            
            <div className="space-y-6">
              {/* Area Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Area Size
                </label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={formData.area}
                    onChange={(e) => handleInputChange('area', e.target.value)}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter area size"
                  />
                  <select
                    value={formData.unit}
                    onChange={(e) => handleInputChange('unit', e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="sqft">sq ft</option>
                    <option value="sqm">sq m</option>
                  </select>
                </div>
              </div>

              {/* Space Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Space Type
                </label>
                <select
                  value={formData.spaceType}
                  onChange={(e) => handleInputChange('spaceType', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="office">Office</option>
                  <option value="retail">Retail</option>
                  <option value="warehouse">Warehouse</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="restaurant">Restaurant</option>
                </select>
              </div>

              {/* Pixel Pitch */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pixel Pitch (mm)
                  <Info className="inline w-4 h-4 ml-1 text-gray-400" />
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.pixelPitch}
                  onChange={(e) => handleInputChange('pixelPitch', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="2.5"
                />
                <p className="text-xs text-gray-500 mt-1">For LED display applications</p>
              </div>

              {/* Cabinet Size */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cabinet Size
                </label>
                <select
                  value={formData.cabinetSize}
                  onChange={(e) => handleInputChange('cabinetSize', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {cabinetSizes.map(size => (
                    <option key={size.value} value={size.value}>
                      {size.label}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-gray-500 mt-1">For modular LED installations</p>
              </div>

              {/* Additional Parameters */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ceiling Height (ft)
                  </label>
                  <input
                    type="number"
                    value={formData.ceilingHeight}
                    onChange={(e) => handleInputChange('ceilingHeight', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Current Lighting
                  </label>
                  <select
                    value={formData.currentLighting}
                    onChange={(e) => handleInputChange('currentLighting', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="fluorescent">Fluorescent</option>
                    <option value="incandescent">Incandescent</option>
                    <option value="halogen">Halogen</option>
                    <option value="hid">HID</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hours/Day
                  </label>
                  <input
                    type="number"
                    value={formData.hoursPerDay}
                    onChange={(e) => handleInputChange('hoursPerDay', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Days/Week
                  </label>
                  <input
                    type="number"
                    value={formData.daysPerWeek}
                    onChange={(e) => handleInputChange('daysPerWeek', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rate ($/kWh)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.electricityRate}
                    onChange={(e) => handleInputChange('electricityRate', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Project Overview */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-blue-600" />
                Project Overview
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{results.fixturesNeeded}</div>
                  <div className="text-sm text-gray-600">LED Fixtures</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{results.totalLumens.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Total Lumens</div>
                </div>
              </div>
            </div>

            {/* Cost Analysis */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-green-600" />
                Cost Analysis
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Equipment Cost:</span>
                  <span className="font-semibold">${results.equipmentCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Installation Cost:</span>
                  <span className="font-semibold">${results.installationCost.toLocaleString()}</span>
                </div>
                <div className="border-t pt-2 flex justify-between">
                  <span className="font-bold text-gray-900">Total Project Cost:</span>
                  <span className="font-bold text-lg text-blue-600">${results.totalProjectCost.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Energy Savings */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                Energy Savings
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Energy Use:</span>
                  <span className="font-semibold">{results.currentEnergyUse.toLocaleString()} kWh/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">New Energy Use:</span>
                  <span className="font-semibold">{results.newEnergyUse.toLocaleString()} kWh/year</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span className="font-semibold">Energy Reduction:</span>
                  <span className="font-bold">{results.savingsPercentage}%</span>
                </div>
              </div>
            </div>

            {/* ROI Analysis */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">ROI Analysis</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Payback Period:</span>
                  <span className="font-semibold">{results.paybackPeriod} years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">10-Year Savings:</span>
                  <span className="font-semibold text-green-600">${results.tenYearSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Maintenance Savings:</span>
                  <span className="font-semibold">${results.maintenanceSavings.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* LED Cabinet Analysis */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="w-5 h-5 mr-2 bg-purple-600 rounded"></div>
                LED Cabinet Analysis
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Cabinets Required:</span>
                  <span className="font-semibold text-purple-600">{results.totalCabinets}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Power Consumption:</span>
                  <span className="font-semibold">{results.totalPowerConsumption.toLocaleString()}W</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cabinets per Loop:</span>
                  <span className="font-semibold">{results.cabinetsPerLoop}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Recommended Wire Size:</span>
                  <span className="font-semibold text-blue-600">{results.recommendedWireSize}</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Wire sizing assumes 220V system. Consult with a qualified electrician for final specifications.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Calculate;