import { useState } from 'react';

const tabs = ['Description' , 'Reviews'];

const GameTabs = ({ description, requirements, reviews }) => {
  const [active, setActive] = useState('Description');

  return (
    <div className="rounded-2xl bg-[#111111] p-4 shadow-xl">
      <div className="mb-4 flex gap-3 overflow-x-auto pb-1">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActive(tab)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition cursor-pointer ${
              active === tab
                ? 'bg-yellow-700 text-[#cfcfcf]'
                : 'bg-[#171717] text-[#cfcfcf] hover:bg-[#222]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      {active === 'Description' && (
        <p className="leading-relaxed text-[#cfcfcf]">{description}</p>
      )}
      {/* {active === 'Requirements' && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-[#0b0c0d] p-4">
            <h4 className="mb-2 text-lg font-semibold text-white">Minimum</h4>
            <ul className="space-y-2 text-sm text-[#cfcfcf]">
              {requirements?.minimum?.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-[#0b0c0d] p-4">
            <h4 className="mb-2 text-lg font-semibold text-white">Recommended</h4>
            <ul className="space-y-2 text-sm text-[#cfcfcf]">
              {requirements?.recommended?.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      )} */}
      {active === 'Reviews' && (
        <div className="space-y-4">
          {reviews?.map((review) => (
            <div
              key={review.id}
              className="rounded-xl bg-[#0b0c0d] p-4 text-sm text-[#cfcfcf]"
            >
              <div className="mb-1 flex items-center justify-between">
                <span className="font-semibold text-white">{review.author}</span>
                <span className="rounded-full bg-[#171717] px-2 py-1 text-xs text-yellow-600">
                  {review.rating.toFixed(1)}
                </span>
              </div>
              <p className="leading-relaxed">{review.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GameTabs;

