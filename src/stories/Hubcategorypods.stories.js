import { db } from '../config/firebase';
import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";

import {
  useEffect,
  useRef,
  useState
} from "react";

import { createPortal } from "react-dom";
import { HubCategoryPods } from './Hubcategorypods';
import { useArgs } from 'storybook/preview-api';

export default {
  title: 'Modules/Category Pods',
  component: HubCategoryPods,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    selectedModule: {
      table: {
        disable: true,
      },
    },
    moduleName: {
      control: 'text',
    },
    saveModule: {
      control: 'boolean',
    },
    lozengetextcolor: {
      control: {
        type: 'select',
      },
      options: ['#000000', '#FFFFFF'],
      labels: {
        '#000000': 'Black',
        '#FFFFFF': 'White',
      },
    },
  },

  decorators: [
    (Story) => {
      const [currentArgs, updateArgs] = useArgs();
      const [modules, setModules] = useState([]);
      const loadingRef = useRef(false);
      const previousModule = useRef("");

      // LOAD MODULE
      useEffect(() => {
        if (
          !currentArgs.selectedModule ||
          loadingRef.current ||
          previousModule.current === currentArgs.selectedModule
        ) return;

        const load = async () => {
          loadingRef.current = true;

          try {
            const ref = doc(
              db,
              "hub-category-pods-modules",
              currentArgs.selectedModule
            );

            const snap = await getDoc(ref);

            if (snap.exists()) {
              previousModule.current = currentArgs.selectedModule;

              updateArgs({
                ...currentArgs,
                moduleName: currentArgs.selectedModule,
                ...snap.data(),
              });
            }
          } catch (e) {
            console.log("load error", e);
          }

          loadingRef.current = false;
        };

        load();
      }, [currentArgs.selectedModule]);

      // SAVE MODULE
      useEffect(() => {
        if (
          loadingRef.current ||
          !currentArgs.saveModule ||
          !currentArgs.moduleName
        ) return;

        const save = async () => {
          try {
            const {
              moduleName,
              selectedModule,
              saveModule,
              ...fields
            } = currentArgs;

            await setDoc(
              doc(db, "hub-category-pods-modules", moduleName),
              fields,
              { merge: false }
            );

            updateArgs({
              saveModule: false,
              selectedModule: moduleName,
            });
          } catch (e) {
            console.log("save error", e);
          }
        };

        save();
      }, [currentArgs.saveModule]);

      // LOAD DROPDOWN
      useEffect(() => {
        const loadModules = async () => {
          try {
            const snap = await getDocs(
              collection(db, "hub-category-pods-modules")
            );
            setModules(snap.docs.map(d => d.id));
          } catch (e) {
            console.log("module list error", e);
          }
        };

        loadModules();
      }, []);

      return (
        <>
          {createPortal(
            <div
              style={{
                position: "fixed",
                top: 10,
                right: 10,
                zIndex: 9999,
                padding: 12,
                background: "#111",
                color: "#fff",
                borderRadius: "4px",
              }}
            >
              <div>
                <label>Load existing module:</label>

                <select
                  value={currentArgs.selectedModule || ""}
                  style={{ color: '#000' }}
                  onChange={(e) => {
                    updateArgs({
                      ...currentArgs,
                      selectedModule: e.target.value,
                    });
                  }}
                >
                  <option value="">-- select saved module --</option>

                  {modules.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>
            </div>,
            document.body
          )}

          <Story />
        </>
      );
    },
  ],
};

export const CategoryPodsHero = {
  args: {
    moduleName: "",
    selectedModule: "",
    saveModule: false,

    podbackgroundcolor:'',

    podtextcolor:'',

    lozengebackgroundcolor: '',
    lozengetextcolor: '#000000',
    
    lozengetitle: '',

    pod1image: '',
    pod1imagealt: '',
    pod1title: '',
    pod1link: '',

    pod2image: '',
    pod2imagealt: '',
    pod2title: '',
    pod2link: '',

    pod3image: '',
    pod3imagealt: '',
    pod3title: '',
    pod3link: '',

    pod4image: '',
    pod4imagealt: '',
    pod4title: '',
    pod4link: '',

    pod5image: '',
    pod5imagealt: '',
    pod5title: '',
    pod5link: '',

    pod6image: '',
    pod6imagealt: '',
    pod6title: '',
    pod6link: '',

    pod7image: '',
    pod7imagealt: '',
    pod7title: '',
    pod7link: '',

    pod8image: '',
    pod8imagealt: '',
    pod8title: '',
    pod8link: '',

    pod9image: '',
    pod9imagealt: '',
    pod9title: '',
    pod9link: '',

    pod10image: '',
    pod10imagealt: '',
    pod10title: '',
    pod10link: '',

    pod11image: '',
    pod11imagealt: '',
    pod11title: '',
    pod11link: '',

    pod12image: '',
    pod12imagealt: '',
    pod12title: '',
    pod12link: '',
  },
};