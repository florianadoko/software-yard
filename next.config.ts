// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   webpack: (config) => {
//     // Ensure Babel is applied correctly
//     config.module.rules.push({
//       test: /\.(ts|tsx)$/,
//       use: {
//         loader: "babel-loader",
//         options: {
//           presets: ["next/babel"],
//         },
//       },
//     });

//     return config;
//   },
// };

// export default nextConfig;



import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Remove Babel-related settings */
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;