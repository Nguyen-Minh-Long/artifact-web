import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Ayato from '../../CharacterImage/Ayato.png'
import Childe from '../../CharacterImage/Childe.png'
import Kokomi from '../../CharacterImage/Kokomi.png'
import Yelan from '../../CharacterImage/Yelan.png'


const Characters = {
  Ayato: {
    name: Ayato,
    artifacts: {
      Hoa: {
        type: "Dư Âm Tế Lễ",
        name: "Hoa",
        command: "!giveart 98544 10001 atk atk% cr cdmg,6 21",
        img: "https://img.game8.co/3505545/d4cfb598bfac7b177b53551d060e2db1.png/show"
      },
      Lông: {
        type: "Dư Âm Tế Lễ",
        name: "Lông",
        command: "!giveart 98524 10003 atk% em cr cdmg,6 21",
        img: "https://img.game8.co/3505554/0907a35f461ddb93c4ba117fbac33863.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Dư Âm Tế Lễ",
        name: "Đồng Hồ",
        command: "!giveart 98554 10004 atk em cr cdmg,6 21",
        img: "https://img.game8.co/3505556/0f0809959617f165e5431d4c960705b9.png/show"
      }
      ,
      Ly: {
        type: "Dư Âm Tế Lễ",
        name: "Ly",
        command: "!giveart 98514 15011 atk% hp% cr cdmg,6 21",
        img: "https://img.game8.co/3505558/039547e35abc77f7a50737f189a93761.png/show"
      }
      ,
      Mũ: {
        type: "Dư Âm Tế Lễ",
        name: "Mũ",
        command: "!giveart 98534 30950 atk% em 989001,2 cr,6 21",
        img: "https://img.game8.co/3505559/c93fa2f90a1437a325edfa868c59f478.png/show"
      }
    }
  },
  Yelan: {
    name: Yelan,
    artifacts: {
      Hoa: {
        type: "Trầm Luân",
        name: "Hoa",
        command: "!giveart 90544 10001 hp% em cr cdmg,6 21",
        img: "https://img.game8.co/3357150/7ee57d9051ae890fea7494209673bb56.png/show"
      },
      Lông: {
        type: "Trầm Luân",
        name: "Lông",
        command: "!giveart 90524 10003 hp% em cr cdmg,6 21",
        img: "https://img.game8.co/3357152/2cb50efd6ec37c376110f142ba8fdcbb.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Trầm Luân",
        name: "Đồng Hồ",
        command: "!giveart 90554 10002 hp em cr cdmg,6 21",
        img: "https://img.game8.co/3357148/5c7f80b759f6efe2783d83ac709674da.png/show"
      }
      ,
      Ly: {
        type: "Thiên Nham",
        name: "Ly",
        command: "!giveart 91514 15011 hp% em cr,6 cdmg 21",
        img: "https://img.game8.co/3346879/4596584038c08eb792e4bac687ccb8dd.png/show"
      }
      ,
      Mũ: {
        type: "Thiên Nham",
        name: "Mũ",
        command: "!giveart 91534 30950 hp% em 989001,2 cr,6 21",
        img: "https://img.game8.co/3346874/27f99b6c8ecf5011162520464b8c3ee5.png/show"
      }
    }
  },
  Kokomi: {
    name: Kokomi,
    artifacts: {
      Hoa: {
        type: "Xà Cừ",
        name: "Hoa",
        command: "!giveart 96544 10001 atk atk% em hp%,6 21",
        img: "https://img.game8.co/3453209/48749ef9918ef481797a0ca8294e9bec.png/show"
      },
      Lông: {
        type: "Xà Cừ",
        name: "Lông",
        command: "!giveart 96524 10003 atk% em hp hp%,6 21",
        img: "https://img.game8.co/3453299/10ca1cf1590e8159ac8e311b78e8fe31.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Xà Cừ",
        name: "Đồng Hồ",
        command: "!giveart 96554 10002 atk atk% em hp,6 21",
        img: "https://img.game8.co/3453207/b21e9152413b9a5e7a6fd2bd963f401b.png/show"
      }
      ,
      Ly: {
        type: "Xà Cừ",
        name: "Ly",
        command: "!giveart 96514 15011 atk atk% em hp%,6 21",
        img: "https://img.game8.co/3453208/451351c833dcc808f6d93b634599ed30.png/show"
      }
      ,
      Mũ: {
        type: "Xà Cừ",
        name: "Mũ",
        command: "!giveart 96534 10002 atk atk% em hp,6 21",
        img: "https://img.game8.co/3453735/0e30141979a7d4d89c53e5c773f6c6ad.png/show"
      }
    }
  },
  Childe: {
    name: Childe,
    artifacts: {
      Hoa: {
        type: "Trầm Luân",
        name: "Hoa",
        command: "!giveart 90544 10001 atk% em cr cdmg,6 21",
        img: "https://img.game8.co/3357150/7ee57d9051ae890fea7494209673bb56.png/show"
      },
      Lông: {
        type: "Trầm Luân",
        name: "Lông",
        command: "!giveart 90524 10003 atk% em cr cdmg,6 21",
        img: "https://img.game8.co/3357152/2cb50efd6ec37c376110f142ba8fdcbb.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Trầm Luân",
        name: "Đồng Hồ",
        command: "!giveart 90554 10004 atk em cr cdmg,6 21",
        img: "https://img.game8.co/3357148/5c7f80b759f6efe2783d83ac709674da.png/show"
      }
      ,
      Ly: {
        type: "Trầm Luân",
        name: "Ly",
        command: "!giveart 90514 15011 atk em cr cdmg,6 21",
        img: "https://img.game8.co/3357151/32af6ad38a1d110f8673ba5cbcfcde48.png/show"
      }
      ,
      Mũ: {
        type: "Trầm Luân",
        name: "Mũ",
        command: "!giveart 90534 30950 atk% em 989001,2 cr,6 21",
        img: "https://img.game8.co/3357149/f900e191300afa3507b2bf63316cbf2f.png/show"
      }
    }
  },
};

function Hydro() {

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
            <th colSpan="4" style={{ color: '#06dcee' }}>💧💧💧 Best of Artifact - Hydro 💧💧💧</th>
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

export default Hydro
