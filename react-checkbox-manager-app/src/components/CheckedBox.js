import React, { useEffect, useState } from "react";
import "./check.css";
import DUMMY from "../dummy.json";

const CheckedBox = () => {
  const [data, setData] = useState({
    appId: 0,
    moduleId: 0,
    add: false,
    edit: false,
    remove: false,
    view: false,
  });

  const { appId, moduleId, add, edit, remove, view } = data;

  const onChangeObj = (e) => {
    const { name, value, checked } = e.target;
    if (name === "appId") {
      setData((prevState) => ({
        ...prevState,
        appId: checked ? parseInt(value) : 0,
      }));
    } else if (name === "moduleId") {
      setData((prevState) => ({
        ...prevState,
        moduleId: checked ? parseInt(value) : 0,
      }));
    } else {
      setData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const allCheckboxes = [];
    DUMMY.forEach((app) => {
      const appObj = {
        appId: app.appId,
        modules: [],
      };
      app.modules.forEach((module) => {
        const moduleObj = {
          moduleId: module.moduleId,
          checked: false,
        };
        const childCheckbox = document.querySelectorAll(
          `input[name=checkbox-${app.appId}-${module.moduleId}]:checked`
        );
        if (childCheckbox.length > 0) {
          moduleObj.checked = true;
          childCheckbox.forEach((chechbox) => {
            moduleObj[chechbox.value] = true;
          });
        }
        appObj.modules.push(moduleObj);
      });
      allCheckboxes.push(appObj);
    });

    let finalArr = allCheckboxes.filter((appObj) => {
      let arr = appObj.modules.filter(
        (moduleObj) => moduleObj.checked === true
      );
      if (arr.length != 0) {
        appObj.modules = arr;
        return appObj;
      }
    });

    console.log(finalArr);
  };

  useEffect((e) => {
    // main parent checkbox component

    let app = document.querySelectorAll(".appid");
    app.forEach((app) => {
      app.addEventListener("change", function (event) {
        if (this.checked) {
          console.log("true");
          let parent = this.parentElement.parentElement;
          let allInputs = parent.querySelectorAll(".moduleid");
          allInputs.forEach((child) => {
            child.checked = this.checked;
            const childCheckboxes =
              child.parentElement.nextElementSibling.querySelectorAll(
                ".childInput"
              );
            childCheckboxes.forEach((childCheckbox) => {
              childCheckbox.checked = this.checked;
            });
          });
        } else {
          console.log("false");
          let parent = this.parentElement.parentElement;
          let allInputs = parent.querySelectorAll(".moduleid");
          allInputs.forEach((child) => {
            child.checked = this.checked;
            const childCheckboxes =
              child.parentElement.nextElementSibling.querySelectorAll(
                ".childInput"
              );
            childCheckboxes.forEach((childCheckbox) => {
              childCheckbox.checked = false;
            });
          });
        }
      });
    });

    let modules = document.querySelectorAll(".moduleid");
    modules.forEach((module) => {
      module.addEventListener("change", function (event) {
        if (this.checked) {
          let parent = this.parentElement.parentElement;

          let allinpute = parent.children[1].querySelectorAll("input");
          allinpute.forEach((child) => {
            child.checked = this.checked;
          });
          const appCheckbox = parent.parentElement.querySelector(".appid");
          if (appCheckbox) {
            const moduleCheckboxes =
              parent.parentElement.querySelectorAll(".moduleid");
            let allChecked = true;
            moduleCheckboxes.forEach((checkbox) => {
              if (!checkbox.checked) {
                allChecked = false;
              }
            });
            appCheckbox.checked = allChecked;
          }
        } else {
          let appinpute =
            this.parentElement.parentElement.parentElement.children[0]
              .children[0];
          appinpute.checked = false;

          let parent = this.parentElement.parentElement;
          let allinpute = parent.querySelectorAll("input");
          allinpute.forEach((child) => {
            child.checked = false;
          });
        }
      });
    });

    // single element

    let singleChild = document.querySelectorAll(".childInput");
    // console.log(singleChild);
    singleChild.forEach((child) => {
      child.addEventListener("change", function (event) {
        if (this.checked) {
          let parent = this.parentElement;
          let allInputes = parent.querySelectorAll("input");
          let count = 0;
          allInputes.forEach((child) => {
            if (child.checked) {
              count++;
            }
          });
          console.log(count);
          if (count === 4) {
            let moduleInpute = parent.parentElement.children[0].children[0];
            moduleInpute.checked = true;
            const moduleCheckboxes =
              parent.parentElement.parentElement.querySelectorAll(".moduleid");
            let allChecked = 0;
            let total = 0;
            moduleCheckboxes.forEach((checkbox) => {
              total++;
              if (checkbox.checked) {
                allChecked++;
              }
            });
            console.log("t " + total + "c " + allChecked);
            if (allChecked === total) {
              parent.parentElement.parentElement.children[0].children[0].checked = true;
            }
          }
        } else {
          let parent = this.parentElement;
          let moduleInpute = parent.parentElement.children[0].children[0];
          moduleInpute.checked = false;
          parent.parentElement.parentElement.children[0].children[0].checked = false;
        }
      });
    });
  }, []);

  //----------------------------------------------------------------

  return (
    <div className="maincont">
      {DUMMY.map((app) => {
        return (
          <div className="applicationcont" key={app.appId}>
            <div className="appinput">
              <input
                type="checkbox"
                name="appId"
                value={app.appId}
                onChange={onChangeObj}
                className="appid chk"
              />
              <span>{app.appName}</span>
            </div>
            {app.modules.map((module) => {
              return (
                <div className="modulerow" key={module.moduleId}>
                  <div className="moduleinput">
                    <input
                      type="checkbox"
                      name="moduleId"
                      value={module.moduleId}
                      onChange={onChangeObj}
                      className="moduleid chk"
                    />
                    <span>{module.name}</span>
                  </div>
                  <div>
                    Add
                    <input
                      type="checkbox"
                      name={`checkbox-${app.appId}-${module.moduleId}`}
                      value="add"
                      onChange={onChangeObj}
                      className="add chk childInput"
                    />
                    Edit
                    <input
                      type="checkbox"
                      name={`checkbox-${app.appId}-${module.moduleId}`}
                      value="edit"
                      onChange={onChangeObj}
                      className="edit chk childInput"
                    />
                    View
                    <input
                      type="checkbox"
                      name={`checkbox-${app.appId}-${module.moduleId}`}
                      value="view"
                      onChange={onChangeObj}
                      className="view chk childInput"
                    />
                    Delete
                    <input
                      type="checkbox"
                      name={`checkbox-${app.appId}-${module.moduleId}`}
                      value="remove"
                      onChange={onChangeObj}
                      className="delete chk childInput"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
      <button onClick={onSubmit} className="btn btn-primary large mx-2">
        Submit
      </button>
    </div>
  );
};

export default CheckedBox;
