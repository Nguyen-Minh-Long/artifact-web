import React from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Xiao from '../../CharacterImage/Xiao.png'
import Venti from '../../CharacterImage/Venti.png'
import Kazuha from '../../CharacterImage/Kazuha.png'
import Jean from '../../CharacterImage/Jean.png'


const Characters = {
  Jean: {
    name: Jean,
    artifacts: {
      Hoa: {
        type: "Bóng Hình",
        name: "Hoa",
        command: "!giveart 24654 10001 atk atk% cr cdmg,6 21",
        img: "https://img.game8.co/3357184/9eb2d7ff38a9060e231e8c88021b91c9.png/show"

      },
      Lông: {
        type: "Bóng Hình",
        name: "Lông",
        command: "!giveart 24652 10003 atk% em cr cdmg,6 21",
        img: "https://img.game8.co/3357186/25d5f006d355b99ddb607e5537be5527.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Bóng Hình",
        name: "Đồng Hồ",
        command: "!giveart 24655 10004 atk em cr cdmg,6 21",
        img: "https://img.game8.co/3357185/81bd8983fe561d7604f14a59dfd3fe0d.png/show"
      }
      ,
      Ly: {
        type: "Bóng Hình",
        name: "Ly",
        command: "!giveart 24651 15012 atk atk% cr cdmg,6 21",
        img: "https://img.game8.co/3357187/fb24f723a68010c4d0cda68a01656b52.png/show"
      }
      ,
      Mũ: {
        type: "Bóng Hình",
        name: "Mũ",
        command: "!giveart 24653 30950 atk% em 989001,2 cr,6 21",
        img: "https://img.game8.co/3357188/c5918612911deb861634ad4b38180371.png/show"
      }
    }
  },
  Venti: {
    name: Venti,
    artifacts: {
      Hoa: {
        type: "Bóng Hình",
        name: "Hoa",
        command: "!giveart 24654 10001 atk atk% cr cdmg,6 21",
        img: "https://img.game8.co/3357184/9eb2d7ff38a9060e231e8c88021b91c9.png/show"

      },
      Lông: {
        type: "Bóng Hình",
        name: "Lông",
        command: "!giveart 24652 10003 atk% em cr cdmg,6 21",
        img: "https://img.game8.co/3357186/25d5f006d355b99ddb607e5537be5527.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Bóng Hình",
        name: "Đồng Hồ",
        command: "!giveart 24655 10004 atk em cr cdmg,6 21",
        img: "https://img.game8.co/3357185/81bd8983fe561d7604f14a59dfd3fe0d.png/show"
      }
      ,
      Ly: {
        type: "Bóng Hình",
        name: "Ly",
        command: "!giveart 24651 15012 atk atk% cr,6 cdmg 21",
        img: "https://img.game8.co/3357187/fb24f723a68010c4d0cda68a01656b52.png/show"
      }
      ,
      Mũ: {
        type: "Bóng Hình",
        name: "Mũ",
        command: "!giveart 24653 30950 atk% em 989001,2 cr,6 21",
        img: "https://img.game8.co/3357188/c5918612911deb861634ad4b38180371.png/show"
      }
    }
  },
  Xiao: {
    name: Xiao,
    artifacts: {
      Hoa: {
        type: "Thần Sa",
        name: "Hoa",
        command: "!giveart 97544 10001 atk atk% cr cdmg,6 21",
        img: "https://img.game8.co/3505546/4e9fac43d8a0cfe8dddb8cd8a310177a.png/show"
      },
      Lông: {
        type: "Thần Sa",
        name: "Lông",
        command: "!giveart 97524 10003 atk% em cr cdmg,6 21",
        img: "https://img.game8.co/3505557/114b18819e23887443fc9e984d8f9cf1.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Thần Sa",
        name: "Đồng Hồ",
        command: "!giveart 97554 10004 atk em cr cdmg,6 21",
        img: "https://img.game8.co/3505553/3bc74477b6b64c7b6eda411e79b4f946.png/show"
      }
      ,
      Ly: {
        type: "Thần Sa",
        name: "Ly",
        command: "!giveart 97514 15012 atk atk% cr cdmg,6 21",
        img: "https://img.game8.co/3505555/0ebc994d62f89dc6405097817dbb9925.png/show"
      }
      ,
      Mũ: {
        type: "Thần Sa",
        name: "Mũ",
        command: "!giveart 97534 30950 atk atk% 989001,2 cr,6 21",
        img: "https://img.game8.co/3505552/cdb772515ef0a6e065e506db764192e3.png/show"
      }
    }
  },
  Kazuha: {
    name: Kazuha,
    artifacts: {
      Hoa: {
        type: "Bóng Hình",
        name: "Hoa",
        command: "!giveart 24654 10001 atk% em,6 cr cdmg 21",
        img: "https://img.game8.co/3357184/9eb2d7ff38a9060e231e8c88021b91c9.png/show"

      },
      Lông: {
        type: "Bóng Hình",
        name: "Lông",
        command: "!giveart 24652 10003 atk% em,6 cr cdmg 21",
        img: "https://img.game8.co/3357186/25d5f006d355b99ddb607e5537be5527.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Bóng Hình",
        name: "Đồng Hồ",
        command: "!giveart 24655 10008 atk atk% cr,6 cdmg 21",
        img: "https://img.game8.co/3357185/81bd8983fe561d7604f14a59dfd3fe0d.png/show"
      }
      ,
      Ly: {
        type: "Bóng Hình",
        name: "Ly",
        command: "!giveart 24651 15012 em,6 atk% cr cdmg 21",
        img: "https://img.game8.co/3357187/fb24f723a68010c4d0cda68a01656b52.png/show"
      }
      ,
      Mũ: {
        type: "Bóng Hình",
        name: "Mũ",
        command: "!giveart 24653 10008 989001,2 atk% cr,3 cdmg,4 21",
        img: "https://img.game8.co/3357188/c5918612911deb861634ad4b38180371.png/show"
      }
    }
  },
};

function Ameno() {

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
            <th colSpan="4" style={{ color: '#aaf9e4' }}>💨💨💨 Best of Artifact - Ameno 💨💨💨</th>
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

export default Ameno
