// edited by agent
// package.ts

interface PackageJson {
    name: string;
    version: string;
    description?: string;
    main?: string;
    scripts?: {
        [key: string]: string;
    };
    repository?: {
        type: string;
        url: string;
    };
    keywords?: string[];
    author?: string;
    license?: string;
    bugs?: {
        url: string;
    };
    homepage?: string;
    dependencies?: {
        [key: string]: string;
    };
    devDependencies?: {
        [key: string]: string;
    };
}

const examplePackageJson: PackageJson = {
    name: "example-package",
    version: "1.0.0",
    description: "This is an example package.json file",
    main: "index.js",
    scripts: {
        start: "node index.js",
        test: "echo \"Error: no test specified\" && exit 1"
    },
    repository: {
        type: "git",
        url: "https://github.com/example/example-package.git"
    },
    keywords: ["example", "package"],
    author: "Example Author",
    license: "ISC",
    bugs: {
        url: "https://github.com/example/example-package/issues"
    },
    homepage: "https://github.com/example/example-package#readme",
    dependencies: {
        "express": "^4.17.1"
    },
    devDependencies: {
        "typescript": "^4.1.3"
    }
};

console.log(examplePackageJson);