## Multi gas project template
This repository is contained npm scripts for creating gas project with [clasp](https://github.com/google/clasp).

## Install
1. Install clasp & login to Google account.
2. Run npm install.
```
npm install
```

## Usage
- Create clasp project(Project Name is required).

```
npm run create --project=[Project Name]
```

- Push(Project Name is required)
```
npm run push --project=[Project Name]
```

- Deploy(Project Name is required)
```
npm run deploy --project=[Project Name]
```

- Open(Project Name is required)
```
npm run open --project=[Project Name]
```

- Or set npm user config to `project` before command.
```
npm config set project [Project Name] 
```