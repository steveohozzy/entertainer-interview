import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
  deleteDoc
} from "firebase/firestore";

import { db } from "../config/firebase";
import { useArgs } from "storybook/preview-api";


export default {
  title: "A+ Content Manager",

  parameters: {
    layout: "fullscreen",
  },

  argTypes: {

    productNumber: {
      control: "text",
    },

    html: {
      control: "text",
    },

    saveContent: {
      control: "boolean",
    },

    deleteContent: {
      control: "boolean",
    },

  },

};


export const Editor = {

  args: {

    productNumber: "",
    html: "",
    saveContent: false,
    deleteContent: false,

  },


  render: function Render() {


    const [currentArgs, updateArgs] = useArgs();

    const [products, setProducts] = useState([]);



    // LOAD EXISTING A+ RECORD

    useEffect(() => {


      if (!currentArgs.productNumber) {
        return;
      }


      const load = async () => {


        const ref = doc(
          db,
          "apluscontent",
          currentArgs.productNumber
        );


        const snap = await getDoc(ref);


        if (snap.exists()) {


          updateArgs({

            ...currentArgs,

            ...snap.data()

          });


        }


      };


      load();


    }, [currentArgs.productNumber]);




    // SAVE RECORD

    useEffect(() => {


      if (!currentArgs.saveContent) {
        return;
      }


      if (!currentArgs.productNumber) {
        return;
      }



      const save = async () => {


        const {
          productNumber,
          saveContent,
          deleteContent,
          ...fields
        } = currentArgs;



        await setDoc(

          doc(
            db,
            "apluscontent",
            productNumber
          ),

          fields,

          {
            merge:false
          }

        );



        updateArgs({

          saveContent:false

        });


      };


      save();


    }, [currentArgs.saveContent]);
    


    // DELETE RECORD

useEffect(() => {

  if (!currentArgs.deleteContent) {
    return;
  }


  if (!currentArgs.productNumber) {
    return;
  }


  const remove = async () => {

  const confirmed = window.confirm(
    "Are you sure you want to delete this A+ content?"
  );

  if (!confirmed) {

    updateArgs({
      deleteContent:false
    });

    return;

  }


    try {


      await deleteDoc(

        doc(
          db,
          "apluscontent",
          currentArgs.productNumber
        )

      );


      updateArgs({

        productNumber:"",
        html:"",
        deleteContent:false

      });



      const snap = await getDocs(
        collection(
          db,
          "apluscontent"
        )
      );


      setProducts(
        snap.docs.map(
          d => d.id
        )
      );


    } catch(e) {

      console.log(
        "delete error",
        e
      );

    }


  };


  remove();


}, [currentArgs.deleteContent]);




    // LOAD EXISTING IDS

    useEffect(() => {


      const load = async () => {


        const snap = await getDocs(
          collection(
            db,
            "apluscontent"
          )
        );


        setProducts(
          snap.docs.map(
            d => d.id
          )
        );


      };


      load();


    }, []);

    return createPortal(

      <div
        style={{
          position:"fixed",
          top:10,
          right:10,
          width:500,
          padding:20,
          background:"#111",
          color:"#fff",
          zIndex:9999,
          borderRadius:8
        }}
      >


        <h3>
          A+ Content Manager
        </h3>



        <label>
          Load existing product
        </label>


        <select

          style={{
            width:"100%",
            color:"#000",
            marginBottom:10
          }}

          value={
            currentArgs.productNumber || ""
          }


          onChange={(e)=>{

            updateArgs({

              ...currentArgs,

              productNumber:e.target.value

            });

          }}

        >

          <option value="">
            -- select product --
          </option>


          {products.map((p)=>(

            <option
              key={p}
              value={p}
            >
              {p}
            </option>

          ))}


        </select>





        <label>
          Product Number
        </label>


        <input

          style={{
            width:"100%",
            color:"#000",
            marginBottom:10
          }}

          value={
            currentArgs.productNumber
          }


          onChange={(e)=>
            updateArgs({

              ...currentArgs,

              productNumber:e.target.value

            })
          }

        />




        <label>
          HTML Content
        </label>


        <textarea

          style={{

            width:"100%",
            height:300,
            color:"#000"

          }}

          value={
            currentArgs.html
          }


          onChange={(e)=>
            updateArgs({

              ...currentArgs,

              html:e.target.value

            })
          }


        />



        <button

          style={{

            marginTop:10,
            padding:"10px 20px"

          }}

          onClick={()=>{

            updateArgs({

              saveContent:true

            });

          }}

        >

          Save A+ Content

        </button>


        <button

  style={{

    marginTop:10,
    marginLeft:10,
    padding:"10px 20px",
    background:"#b91c1c",
    color:"#fff"

  }}

  onClick={()=>{
    updateArgs({
      deleteContent:true
    });
  }}

>

  Delete A+ Content

</button>


      </div>,


      document.body

    );


  }

};