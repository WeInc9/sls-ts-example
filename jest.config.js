module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  collectionCoverage: true,
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  verbose: true,
};
