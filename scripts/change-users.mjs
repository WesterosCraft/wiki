import fs from 'fs';
import { readFile } from 'fs/promises';

const users = JSON.parse(await readFile(new URL('./users.json', import.meta.url)));

const getStringToRender = () => {
  let newarr = [];

  Object.entries(users).forEach(([k, v]) => {
    newarr.push({
      id: k,
      name: v.username,
      primaryGroup: v.primaryGroup || v.nodes.find(x => x?.type === 'inheritance')?.key,
      prefix: v.nodes.find(x => x?.type === 'prefix')?.key,
    });
  });

  return JSON.stringify(newarr, null, 2);
};

fs.writeFileSync(`./converted-users.json`, getStringToRender());

// const test = {
//   '80188667-2c47-446d-b4e4-dc91fb6777c2': {
//     username: 'lyliana',
//     nodes: [
//       {
//         type: 'inheritance',
//         key: 'group.editorlite',
//         value: true,
//       },
//       {
//         type: 'prefix',
//         key: 'prefix.200.&2[Stormborn]',
//         value: true,
//       },
//     ],
//   },
//   '805351a0-30a0-4b38-a4f4-419d45997562': {
//     username: 'flavd',
//     nodes: [
//       {
//         type: 'inheritance',
//         key: 'group.default',
//         value: true,
//       },
//       {
//         type: 'prefix',
//         key: 'prefix.200.&2[BlackFish]',
//         value: true,
//       },
//     ],
//   },
//   '80642aee-3c41-4783-b179-e451a65d9380': {
//     nodes: [
//       {
//         type: 'inheritance',
//         key: 'group.builder',
//         value: true,
//       },
//       {
//         type: 'prefix',
//         key: 'prefix.200.&2[GoldenHand]',
//         value: true,
//       },
//     ],
//   },
//   '82ac74bb-adfa-4fd5-911e-5982fcd1ad4b': {
//     username: 'spikespiegel',
//     primaryGroup: 'editorlite',
//     nodes: [
//       {
//         type: 'prefix',
//         key: 'prefix.204.&4Chaotic&8Neutral&a',
//         value: true,
//         context: {
//           server: '204',
//         },
//       },
//       {
//         type: 'inheritance',
//         key: 'group.editorlite',
//         value: true,
//       },
//       {
//         type: 'prefix',
//         key: 'prefix.200.&2[Kingkiller]',
//         value: true,
//       },
//       {
//         type: 'prefix',
//         key: 'prefix.201.&2[OakenIsle]',
//         value: true,
//       },
//       {
//         type: 'prefix',
//         key: 'prefix.202.&2[TheGriffin]',
//         value: true,
//       },
//       {
//         type: 'prefix',
//         key: 'prefix.203.&2[&1I&6K&1E&6A&2]',
//         value: true,
//       },
//       {
//         type: 'prefix',
//         key: 'prefix.204.&1Chaotic&6Neutral&a',
//         value: true,
//       },
//       {
//         type: 'prefix',
//         key: 'prefix.205.&6Chaotic&1Neutral',
//         value: true,
//       },
//       {
//         type: 'prefix',
//         key: 'prefix.206.&6[Chaotic&1Neutral]',
//         value: true,
//       },
//     ],
//   },
// };

// const converted = {
//   id: '',
//   name: '',
// };

// // convert the test object to the converted object
// for (let [k, v] of Object.entries(test)) {
//   converted.id = k;
//   converted.name = v.username;
// }
