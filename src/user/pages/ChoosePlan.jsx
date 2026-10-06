import React, { useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    subtitle: "For small businesses",
    monthlyPrice: 999,
    period: "/month",
    isPopular: false,
    features: [
      "10,000 Messages",
      "SMS + Email",
      "Basic Reports",
      "Email Support",
    ],
  },
  {
    id: "business",
    name: "Business",
    subtitle: "For growing businesses",
    monthlyPrice: 2499,
    period: "/month",
    isPopular: true,
    badgeText: "Most Popular",
    features: [
      "50,000 Messages",
      "SMS + WhatsApp + Email",
      "Advanced Reports",
      "Contact Management",
      "Priority Support",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    subtitle: "For high volume",
    monthlyPrice: 4999,
    period: "/month",
    isPopular: false,
    features: [
      "1,50,000 Messages",
      "All Channels",
      "API Access",
      "Team Management",
      "Dedicated Support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    subtitle: "For large organizations",
    monthlyPrice: null,
    period: "",
    isPopular: false,
    isCustom: true,
    features: [
      "Unlimited Messages",
      "All Features",
      "Custom Integration",
      "Dedicated Account Manager",
    ],
  },
];

const ChoosePlan = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedPlanId, setSelectedPlanId] = useState("business");

  const handlePlanClick = (plan) => {
    setSelectedPlanId(plan.id);
    if (onSelectPlan) {
      onSelectPlan({ ...plan, billingCycle });
    }
  };

  const calculatePrice = (monthlyPrice) => {
    if (!monthlyPrice) return "Custom Pricing";
    if (billingCycle === "yearly") {
      const discounted = Math.round(monthlyPrice * 0.8);
      return `₹${discounted.toLocaleString()}`;
    }
    return `₹${monthlyPrice.toLocaleString()}`;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-0 pb-6 sm:pb-10 overflow-x-hidden">
      {/* Top Header Row */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 sm:mb-10 gap-4 sm:gap-6">
        <div className="text-left">
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Choose a Plan
          </h1>
          <p className="text-xs sm:text-base text-slate-500 mt-1">
            Select the plan that best fits your business needs.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center space-x-1.5 sm:space-x-2 bg-slate-100 p-1 sm:p-1.5 rounded-2xl border border-slate-200 self-start md:self-auto w-full sm:w-auto justify-between sm:justify-start">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`flex-1 sm:flex-initial px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              billingCycle === "monthly"
                ? "bg-orange-500 text-white shadow-md"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("yearly")}
            className={`flex-1 sm:flex-initial flex items-center justify-center space-x-1.5 sm:space-x-2 px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              billingCycle === "yearly"
                ? "bg-orange-500 text-white shadow-md"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <span>Yearly</span>
            <span className="bg-emerald-100 text-emerald-700 text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-md font-extrabold">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Plan Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-stretch pt-2 sm:pt-4">
        {plans.map((plan) => {
          const isSelected = selectedPlanId === plan.id;

          return (
            <div
              key={plan.id}
              onClick={() => handlePlanClick(plan)}
              className={`relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border flex flex-col justify-between cursor-pointer transition-all duration-300 ease-out ${
                isSelected
                  ? "border-orange-500 ring-2 ring-orange-500/30 shadow-md sm:shadow-xl sm:scale-105 z-10"
                  : "border-slate-200 hover:border-orange-300 sm:hover:scale-[1.02] hover:shadow-md shadow-sm"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] sm:text-xs font-bold px-3.5 sm:px-5 py-1 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap z-20">
                  {plan.badgeText}
                </div>
              )}

              <div>
                <div className="mb-3 sm:mb-6 text-left">
                  <h3 className="font-bold text-slate-900 text-xl sm:text-2xl">
                    {plan.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5 sm:mt-1">
                    {plan.subtitle}
                  </p>
                </div>

                <div className="my-3 sm:my-6 text-left flex items-baseline flex-wrap gap-1">
                  <span className="text-2xl sm:text-4xl font-bold text-slate-900">
                    {calculatePrice(plan.monthlyPrice)}
                  </span>
                  {plan.period && (
                    <span className="text-xs sm:text-sm font-semibold text-slate-400">
                      {plan.period}
                    </span>
                  )}
                </div>

                <ul className="space-y-2.5 sm:space-y-4 mb-5 sm:mb-8 text-left pt-3 sm:pt-5 border-t border-slate-100">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-xs sm:text-sm font-medium text-slate-700"
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mr-2.5 sm:mr-3 shrink-0">
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlanClick(plan);
                }}
                className={`w-full py-2.5 sm:py-3.5 px-4 sm:px-5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isSelected || plan.isPopular
                    ? "bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg"
                    : "border-2 border-slate-200 hover:border-orange-500 hover:text-orange-500 text-slate-700 bg-white"
                }`}
              >
                {plan.isCustom ? "Contact Sales" : "Select Plan"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChoosePlan;