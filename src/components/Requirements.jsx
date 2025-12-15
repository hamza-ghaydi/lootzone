
const requirements = {
  minimum: [
    'CPU: Intel i5-8600K / Ryzen 5 2600',
    'GPU: GTX 1660 / RX 590',
    'RAM: 16GB',
    'Storage: 90GB SSD',
    'OS: Windows 10 64-bit',
  ],
  recommended: [
    'CPU: Intel i7-10700K / Ryzen 7 3700X',
    'GPU: RTX 3070 / RX 6800',
    'RAM: 32GB',
    'Storage: 90GB NVMe SSD',
    'OS: Windows 11 64-bit',
  ],
};

const Requirements = () => (
  <div className="rounded-2xl bg-[#111111] p-4 shadow-xl">
    <div className="mb-3">
      <p className="text-sm uppercase tracking-[0.2em] text-yellow-600">Specs</p>
      <h3 className="text-xl font-semibold text-white">Requirements</h3>
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="rounded-xl bg-[#0b0c0d] p-4">
        <h4 className="mb-2 text-lg font-semibold text-white">Minimum</h4>
        <ul className="space-y-2 text-sm text-[#cfcfcf]">
          {requirements.minimum.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl bg-[#0b0c0d] p-4">
        <h4 className="mb-2 text-lg font-semibold text-white">Recommended</h4>
        <ul className="space-y-2 text-sm text-[#cfcfcf]">
          {requirements.recommended.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Requirements;

