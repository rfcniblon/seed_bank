import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Example3() {
  const [testData, setTestData] = useState({});
  const [name, setName] = useState("");
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const loadWeed = async () => {
      const res = await axios.get("./data.json");
      setTestData(res.data)
    }
    loadWeed()
  }, [])

  const nameSelected = (e) => {
    const name = e.target.value;
    setName(name);
    setHidden(true);
  }

  return (
    <div className="exo">
      <div >
        <label htmlFor="name">Name :</label>
        <select
          onChange={nameSelected}
          value={name}
        >
          <option>Search name </option>
          {Object.keys(testData).map((plante, i) => <option key={i} value={plante}>{plante}</option>)}
        </select>
      </div>
      <div>
        {hidden === true ?
          (<section className="section">
            <div className="div_info">
              <p>Id :{testData[name].id}</p>
              <p>Name :{name}</p>
              <p>Race :{testData[name].race}</p>
              <p>Flavor : {testData[name].flavors}</p>
              <p className="p_effects">Effects :</p>
            </div>
            <div className="div_effects">
              <ul>
                <p className="p_posi">Positive</p>
                {testData[name].effects.positive.map((posi, i) => <li key={i}>{posi}</li>)}
              </ul>
              <ul>
                <p className="p_nega">Négative</p>
                {testData[name].effects.negative.map((nega, i) => <li key={i} value={i}>{nega}</li>)}
              </ul>
              <ul>
                <p className="p_medi">Medical</p>
                {testData[name].effects.medical.map((medi, i) => <li key={i} value={i}>{medi}</li>)}
              </ul>
            </div>
          </section>)
          : null
        }
      </div>
    </div>
  );
}

export default Example3;