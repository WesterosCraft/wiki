import fs from 'fs';
import toMarkdown from '@sanity/block-content-to-markdown';
import createImageUrlBuilder from '@sanity/image-url';
import { getFile } from '@sanity/asset-utils';
import { readFile } from 'fs/promises';

const locations = JSON.parse(await readFile(new URL('./locations.json', import.meta.url)));

const locationFolders = [
  {
    title: 'Beyond the Wall',
    path: 'beyond-the-wall',
  },
  {
    title: 'Dorne',
    path: 'dorne',
  },
  {
    title: 'Crownlands',
    path: 'crownlands',
  },
  {
    title: 'Iron Islands',
    path: 'iron-islands',
  },
  {
    title: 'North',
    path: 'north',
  },
  {
    title: 'Riverlands',
    path: 'riverlands',
  },
  {
    title: 'Stormlands',
    path: 'stormlands',
  },
  {
    title: 'Reach',
    path: 'reach',
  },
  {
    title: 'Vale',
    path: 'vale',
  },
  {
    title: 'Westerlands',
    path: 'westerlands',
  },
  {
    title: 'The Wall',
    path: 'the-wall',
  },
];

const imageBuilder = createImageUrlBuilder({ projectId: '1as7cn02', dataset: 'production' });

export const urlForImage = source => imageBuilder.image(source);

const serializers = {
  types: {
    callout: props => '\n<Callout>\n' + props.node.text + '\n</Callout>\n',
    file: props =>
      `\n<video controls autoplay>
    <source src="${
      getFile(props.node.asset._ref, {
        projectId: '1as7cn02',
        dataset: 'production',
      }).asset?.url
    }" type="video/mp4" />
    </video>\n\n`,
    figure: props => `\n![${props.node?.alt || ''}](${urlForImage(props.node.image.asset._ref)})`,
  },
};

function cap(str) {
  const result = str.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
}

function createMdxFileFromLocationByRegion() {
  locationFolders.forEach(folder =>
    locations.forEach(location => {
      if (location.region.name === folder.title) {
        const getStringToRender = () => {
          const stringToRender = [];

          if (location.region) {
            stringToRender.push(
              `import { ProjectDetails } from '../../components/ProjectDetails';\n\n`,
            );
          }

          if (location?.title) {
            const title = `# ${location.title}\n`;
            stringToRender.push(title);

            const line1 = `<ProjectDetails\n`;
            stringToRender.push(line1);

            if (location.body && location.body.length > 0) {
              stringToRender.push(`  floatRight\n`);
            }

            const region = `  region="${location.region?.name}"\n`;
            stringToRender.push(region);

            const house = `  house="${location.house}"\n`;
            stringToRender.push(house);

            const type = `  type="${location.buildCategory.title}"\n`;
            stringToRender.push(type);

            const status = `  status="${cap(location.projectStatus)}"\n`;
            stringToRender.push(status);

            const warp = `  warp="${location.warp}"\n`;
            stringToRender.push(warp);

            const projectLead = `  projectLead="${location.projectLead}"\n`;
            stringToRender.push(projectLead);

            const dateStarted = `  dateStarted="${location.dateStarted}"\n`;
            stringToRender.push(dateStarted);

            const dateCompleted = `  dateCompleted="${location.dateCompleted}"\n`;
            stringToRender.push(dateCompleted);

            const lastLine = `/>\n`;
            stringToRender.push(lastLine);
          }

          return stringToRender.join('');
        };

        fs.writeFileSync(
          `./pages/${folder.path}/${location.slug.current}.mdx`,
          getStringToRender(),
        );
      }
    }),
  );
}

createMdxFileFromLocationByRegion();

// function createMetaFileFromLocation() {
//   const mapped = locations
//     .filter((x) => x.region.name === "Dorne")
//     .map((location) => ({
//       [location.slug]: location.title,
//     }));

//   const flat = Object.assign({}, ...mapped);

//   fs.writeFileSync(
//     "./pages/builds/dorne/_meta.json",
//     JSON.stringify(flat, null, 2)
//   );
// }

// createMetaFileFromLocation();
