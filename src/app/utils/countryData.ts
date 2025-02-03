// An array of country objects that includes name, international dialing code, and flag.
export const countries = [
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "Ireland", code: "+353", flag: "🇮🇪" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Afghanistan", code: "+93", flag: "🇦🇫" },
  { name: "Albania", code: "+355", flag: "🇦🇱" },
  { name: "Algeria", code: "+213", flag: "🇩🇿" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "Italy", code: "+39", flag: "🇮🇹" },
  { name: "Spain", code: "+34", flag: "🇪🇸" },
  { name: "Brazil", code: "+55", flag: "🇧🇷" },
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "Japan", code: "+81", flag: "🇯🇵" },
  { name: "China", code: "+86", flag: "🇨🇳" },
  { name: "Russia", code: "+7", flag: "🇷🇺" },
  { name: "South Africa", code: "+27", flag: "🇿🇦" },
  { name: "New Zealand", code: "+64", flag: "🇳🇿" },
  { name: "Mexico", code: "+52", flag: "🇲🇽" },
];

// Type definition for a Country object.
export type Country = {
  name: string;
  code: string;
  flag: string;
};
