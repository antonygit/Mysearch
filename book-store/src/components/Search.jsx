import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import logo from "../image/NoRecordFound.png";

const Search = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [isNodata, setIsNodata] = useState(false);

  /*Single fetch*/
  const fetchByIdData = () => {
    let a = [];
    axios
      .get(`https://fakerestapi.azurewebsites.net/api/Authors/${id}`)
      .then(result => {
        console.log();
        a.push(result.data);
        console.log(a);
        setData(a);
      })
      .catch(err => {
        setIsNodata(true);
        console.log("invalid data");
      });
  };

  /*Multi fetch*/

  const fetchAllData = () => {
    axios
      .get("https://fakerestapi.azurewebsites.net/api/Authors")
      .then(result => {
        setData(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (id) fetchByIdData();
    else {
      fetchAllData();
    }
  }, [id]);

  const settingId = () => {
    var Id = document.getElementById("search").value;
    setId(Id);
    setIsNodata(false);
  };

  const debounce = (f, d) => {
    let timer;
    return function() {
      let context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        settingId.apply(context, arguments);
      }, d);
    };
  };

  const _myDebounce = debounce(settingId, 300);

  document.addEventListener("click", function(event) {
    let id = event.target.id;
    if (event.target.id !== "search")
      axios
        .delete(`https://fakerestapi.azurewebsites.net/api/Authors/${id}`)
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
    event.stopImmediatePropagation();
  });
  return (
    <Fragment>
      <section className="main">
        <form name="login" className="search-form">
          <input
            type="text"
            placeholder="Search Using ID.."
            name="username"
            id="search"
            required
            autoComplete="off"
            onChange={_myDebounce}
          />
          {/* <div className="button-submit">
            <button type="submit" id="loginButton">
              Search
            </button>
          </div> */}
        </form>
        <div className="table-search">
          {!isNodata ? (
            <table>
              <tbody>
                <tr>
                  <th>Id</th>
                  <th>Book id</th>
                  <th>First name</th>
                  <th>Last name</th>
                </tr>
              </tbody>
              <tbody>
                {data.map(data => (
                  <tr key={data.ID}>
                    <td>{data.ID}</td>

                    <td>{data.IDBook}</td>
                    <td>{data.FirstName}</td>
                    <td>{data.LastName}</td>
                    <td>
                      <button
                        type="submit"
                        id={data.ID}
                        className="delete-table"
                      >
                        Delete
                      </button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <img src={logo} />
          )}
        </div>
      </section>
    </Fragment>
  );
};

export default Search;
