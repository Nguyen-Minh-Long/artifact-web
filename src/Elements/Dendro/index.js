import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Collei from '../../CharacterImage/Collei.png'
import Tighnari from '../../CharacterImage/Tighnari.png'

const Characters = {
  Tighnari: {
    name: Tighnari,
    artifacts: {
      Hoa: {
        type: "Rừng Sâu",
        name: "Hoa",
        command: "!giveart 20544 10001 atk% atk cr cdmg,6 21",
        img: ""
      },
      Lông: {
        type: "Rừng Sâu",
        name: "Lông",
        command: "!giveart 20524 10003 atk% em cr cdmg,6 21",
        img: ""
      }
      ,
      Đồng_Hồ: {
        type: "Rừng Sâu",
        name: "Đồng Hồ",
        command: "!giveart 20554 10004 atk em cr cdmg,6 21",
        img: ""
      }
      ,
      Ly: {
        type: "Rừng Sâu",
        name: "Ly",
        command: "!giveart 20514 15014 atk% atk cr cdmg,6 21",
        img: ""
      }
      ,
      Mũ: {
        type: "Rừng Sâu",
        name: "Mũ",
        command: "!giveart 20534 30950 atk% atk 989001,2 cr,6 21",
        img: ""
      }
    }
  },
  Collei: {
    name: Collei,
    artifacts: {
      Hoa: {
        type: "Rừng Sâu",
        name: "Hoa",
        command: "!giveart 20544 10001 atk% atk cr cdmg,6 21",
        img: ""
      },
      Lông: {
        type: "Rừng Sâu",
        name: "Lông",
        command: "!giveart 20524 10003 atk% em cr cdmg,6 21",
        img: ""
      }
      ,
      Đồng_Hồ: {
        type: "Rừng Sâu",
        name: "Đồng Hồ",
        command: "!giveart 20554 10004 atk em cr cdmg,6 21",
        img: ""
      }
      ,
      Ly: {
        type: "Rừng Sâu",
        name: "Ly",
        command: "!giveart 20514 15014 atk% atk cr cdmg,6 21",
        img: ""
      }
      ,
      Mũ: {
        type: "Rừng Sâu",
        name: "Mũ",
        command: "!giveart 20534 30950 atk% atk 989001,2 cr,6 21",
        img: ""
      }
    }
  },
};

function Dendro() {

  const [isActive, setIsActive] = useState(false);


  const CharactersValues = Object.values(Characters)

  const tbodies = CharactersValues.map((Characters, index) => {
    const ArtifactValues = Object.values(Characters.artifacts)
    const ArtifactRows = ArtifactValues.map((artifact, i) => {
      const CharactersName = i === 0 ? <td rowSpan={ArtifactValues.length + 1}>
        <img src={Characters.name} alt='Character' style={{ width: '350px', height: '350px' }} /></td> : null
      return (
        <tr key={i}>
          {CharactersName}
          <td><img src={artifact.img || ''} alt='' style={{ width: '50px', height: '50px' }} /><nobr>&ensp; {artifact.type}</nobr></td>
          <td style={{paddingTop: "25px"}}>{artifact.name}</td>
          <CopyToClipboard text={artifact.command}>
            <td
              onClick={
                () => {
                  setIsActive(artifact.command);
                  toast.success('Copy Successful')
                }
              }
              style={isActive === artifact.command ? {
                color: "#00ff00",
                paddingTop: "25px"
              } : {paddingTop: "25px"}}
            >
              <p className="noselect">{artifact.command}</p></td>
          </CopyToClipboard>
        </tr>
      )
    })
    return (
      <tbody key={index} className={Characters.name}>
        {ArtifactRows}
      </tbody>
    )
  })


  return (
    <div>
      <p style={{ fontSize: 20 }}><b style={{ color: 'red' }}>*Note:</b> Click on the command you want to use will automatically copy to Clipboard</p>
      <Table striped bordered hover variant="dark" style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th colSpan="4" style={{ color: '#38a782' }}>🍀🍀🍀 Best of Artifact - Dendro 🍀🍀🍀</th>
          </tr>
          <tr>
            <th>Character</th>
            <th>Set</th>
            <th>Artifact</th>
            <th>Command</th>
          </tr>
        </thead>
        {tbodies}
      </Table>
      <ToastContainer
        autoClose={100}
      />
    </div>
  )
}

export default Dendro
