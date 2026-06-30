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
  title: 'Hubs/Category Panels',
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
      control: "text",
    },
    saveModule: {
      control: "boolean",
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

    panel1image: '',
    panel1imagealt: '',
    panel1title: '',
    panel1link: '',
    panel1textcolor: '',
    panel1texthovercolor: '',
    panel1backgroundcolor: '',
    panel1bordercolor: '',
    panel1borderhovercolor: '',

    panel2image: '',
    panel2imagealt: '',
    panel2title: '',
    panel2link: '',
    panel2textcolor: '',
    panel2texthovercolor: '',
    panel2backgroundcolor: '',
    panel2bordercolor: '',
    panel2borderhovercolor: '',

    panel3image: '',
    panel3imagealt: '',
    panel3title: '',
    panel3link: '',
    panel3textcolor: '',
    panel3texthovercolor: '',
    panel3backgroundcolor: '',
    panel3bordercolor: '',
    panel3borderhovercolor: '',

    panel4image: '',
    panel4imagealt: '',
    panel4title: '',
    panel4link: '',
    panel4textcolor: '',
    panel4texthovercolor: '',
    panel4backgroundcolor: '',
    panel4bordercolor: '',
    panel4borderhovercolor: '',

    panel5image: '',
    panel5imagealt: '',
    panel5title: '',
    panel5link: '',
    panel5textcolor: '',
    panel5texthovercolor: '',
    panel5backgroundcolor: '',
    panel5bordercolor: '',
    panel5borderhovercolor: '',

    panel6image: '',
    panel6imagealt: '',
    panel6title: '',
    panel6link: '',
    panel6textcolor: '',
    panel6texthovercolor: '',
    panel6backgroundcolor: '',
    panel6bordercolor: '',
    panel6borderhovercolor: '',

    panel7image: '',
    panel7imagealt: '',
    panel7title: '',
    panel7link: '',
    panel7textcolor: '',
    panel7texthovercolor: '',
    panel7backgroundcolor: '',
    panel7bordercolor: '',
    panel7borderhovercolor: '',

    panel8image: '',
    panel8imagealt: '',
    panel8title: '',
    panel8link: '',
    panel8textcolor: '',
    panel8texthovercolor: '',
    panel8backgroundcolor: '',
    panel8bordercolor: '',
    panel8borderhovercolor: '',

    panel9image: '',
    panel9imagealt: '',
    panel9title: '',
    panel9link: '',
    panel9textcolor: '',
    panel9texthovercolor: '',
    panel9backgroundcolor: '',
    panel9bordercolor: '',
    panel9borderhovercolor: '',

    panel10image: '',
    panel10imagealt: '',
    panel10title: '',
    panel10link: '',
    panel10textcolor: '',
    panel10texthovercolor: '',
    panel10backgroundcolor: '',
    panel10bordercolor: '',
    panel10borderhovercolor: '',

    panel11image: '',
    panel11imagealt: '',
    panel11title: '',
    panel11link: '',
    panel11textcolor: '',
    panel11texthovercolor: '',
    panel11backgroundcolor: '',
    panel11bordercolor: '',
    panel11borderhovercolor: '',

    panel12image: '',
    panel12imagealt: '',
    panel12title: '',
    panel12link: '',
    panel12textcolor: '',
    panel12texthovercolor: '',
    panel12backgroundcolor: '',
    panel12bordercolor: '',
    panel12borderhovercolor: '',

    panel13image: '',
    panel13imagealt: '',
    panel13title: '',
    panel13link: '',
    panel13textcolor: '',
    panel13texthovercolor: '',
    panel13backgroundcolor: '',
    panel13bordercolor: '',
    panel13borderhovercolor: '',

    panel14image: '',
    panel14imagealt: '',
    panel14title: '',
    panel14link: '',
    panel14textcolor: '',
    panel14texthovercolor: '',
    panel14backgroundcolor: '',
    panel14bordercolor: '',
    panel14borderhovercolor: '',

    panel15image: '',
    panel15imagealt: '',
    panel15title: '',
    panel15link: '',
    panel15textcolor: '',
    panel15texthovercolor: '',
    panel15backgroundcolor: '',
    panel15bordercolor: '',
    panel15borderhovercolor: '',

    panel16image: '',
    panel16imagealt: '',
    panel16title: '',
    panel16link: '',
    panel16textcolor: '',
    panel16texthovercolor: '',
    panel16backgroundcolor: '',
    panel16bordercolor: '',
    panel16borderhovercolor: '',

    panel17image: '',
    panel17imagealt: '',
    panel17title: '',
    panel17link: '',
    panel17textcolor: '',
    panel17texthovercolor: '',
    panel17backgroundcolor: '',
    panel17bordercolor: '',
    panel17borderhovercolor: '',

    panel18image: '',
    panel18imagealt: '',
    panel18title: '',
    panel18link: '',
    panel18textcolor: '',
    panel18texthovercolor: '',
    panel18backgroundcolor: '',
    panel18bordercolor: '',
    panel18borderhovercolor: '',

    panel19image: '',
    panel19imagealt: '',
    panel19title: '',
    panel19link: '',
    panel19textcolor: '',
    panel19texthovercolor: '',
    panel19backgroundcolor: '',
    panel19bordercolor: '',
    panel19borderhovercolor: '',

    panel20image: '',
    panel20imagealt: '',
    panel20title: '',
    panel20link: '',
    panel20textcolor: '',
    panel20texthovercolor: '',
    panel20backgroundcolor: '',
    panel20bordercolor: '',
    panel20borderhovercolor: '',

    panel21image: '',
    panel21imagealt: '',
    panel21title: '',
    panel21link: '',
    panel21textcolor: '',
    panel21texthovercolor: '',
    panel21backgroundcolor: '',
    panel21bordercolor: '',
    panel21borderhovercolor: '',

    panel22image: '',
    panel22imagealt: '',
    panel22title: '',
    panel22link: '',
    panel22textcolor: '',
    panel22texthovercolor: '',
    panel22backgroundcolor: '',
    panel22bordercolor: '',
    panel22borderhovercolor: '',

    panel23image: '',
    panel23imagealt: '',
    panel23title: '',
    panel23link: '',
    panel23textcolor: '',
    panel23texthovercolor: '',
    panel23backgroundcolor: '',
    panel23bordercolor: '',
    panel23borderhovercolor: '',

    panel24image: '',
    panel24imagealt: '',
    panel24title: '',
    panel24link: '',
    panel24textcolor: '',
    panel24texthovercolor: '',
    panel24backgroundcolor: '',
    panel24bordercolor: '',
    panel24borderhovercolor: '',
  },
};