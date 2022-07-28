import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Ei from '../../CharacterImage/Ei.png'
import Keqing from '../../CharacterImage/Keqing.png'
import Yae from '../../CharacterImage/Yae.png'
import Sara from '../../CharacterImage/Sara.png'
import Dori from '../../CharacterImage/Dori.png'


const Characters = {
  Ei: {
    name: Ei,
    artifacts: {
      Hoa: {
        type: "Dấu Ấn",
        name: "Hoa",
        command: "!giveart 24804 10001 501234 atk% cr cdmg,6 21",
        img: "https://img.game8.co/3397405/a433d977e1c7c160422861b1a086ea58.png/show"
      },
      Lông: {
        type: "Dấu Ấn",
        name: "Lông",
        command: "!giveart 94524 10003 501234 atk% cr cdmg,6 21",
        img: "https://img.game8.co/3397429/928992f15b32be9ed411db4d4bd69a4f.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Dấu Ấn",
        name: "Đồng Hồ",
        command: "!giveart 94554 10007 atk atk% cr cdmg,6 21",
        img: "https://img.game8.co/3397433/126495867ed9467e631fe05b5605b41b.png/show"
      }
      ,
      Ly: {
        type: "Dấu Ấn",
        name: "Ly",
        command: "!giveart 94514 10004 986001 er cr,6 cdmg 21",
        img: "https://img.game8.co/3397430/e0c85c3bb4c2e02116dc958fbfaf6185.png/show"
      }
      ,
      Mũ: {
        type: "Dấu Ấn",
        name: "Mũ",
        command: "!giveart 94534 30960 501234 atk% 989001,2 cdmg,6 21",
        img: "https://img.game8.co/3397431/c9c41d27b898d1fe5f08adbe676c9fc0.png/show"
      }
    }
  },
  Yae: {
    name: Yae,
    artifacts: {
      Hoa: {
        type: "Như Sấm",
        name: "Hoa",
        command: "!giveart 79544 10001 atk% em cr cdmg,6 21",
        img: "https://img.game8.co/3358320/0063bf9308424e6b15e3008a24c5a204.png/show"
      },
      Lông: {
        type: "Như Sấm",
        name: "Lông",
        command: "!giveart 79524 10003 atk% em cr cdmg,6 21",
        img: "https://img.game8.co/3358322/1b1c8c5f39a716783248dd85f17d16f4.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Như Sấm",
        name: "Đồng Hồ",
        command: "!giveart 79554 10004 atk em cr cdmg,6 21",
        img: "https://img.game8.co/3358321/271c00c817f653ae4bfe34213511fef2.png/show"
      }
      ,
      Ly: {
        type: "Dòng Hồi Ức",
        name: "Ly",
        command: "!giveart 24191 15009 atk% em cr,6 cdmg,6 21",
        img: "https://img.game8.co/3397426/c7e39a858bee158ca040e0032dcfbb41.png/show"
      }
      ,
      Mũ: {
        type: "Dòng Hồi Ức",
        name: "Mũ",
        command: "!giveart 24193 30950 atk% em 989001,2 cr,6 21",
        img: "https://img.game8.co/3397428/7d12f9e3cb1549d8de9e82dcdcfafeba.png/show"
      }
    }
  },
  Keqing: {
    name: Keqing,
    artifacts: {
      Hoa: {
        type: "Tôn Giả",
        name: "Hoa",
        command: "!giveart 23444 10001 atk atk% cr,6 cdmg 21",
        img: "https://img.game8.co/3358324/e989939f766aa20189e6a6101075951e.png/show"
      },
      Lông: {
        type: "Tôn Giả",
        name: "Lông",
        command: "!giveart 23442 10003 atk% em cr cdmg,6 21",
        img: "https://img.game8.co/3358323/45f4a5cd9252eb42df00a4459bb19ce5.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Tôn Giả",
        name: "Đồng Hồ",
        command: "!giveart 23445 10004 atk em cr cdmg,6 21",
        img: "https://img.game8.co/3358327/4f0f2321bda3d0f29b6b742d337486ce.png/show"
      }
      ,
      Ly: {
        type: "Tôn Giả",
        name: "Ly",
        command: "!giveart 23441 15009 atk atk% cr cdmg,6 21",
        img: "https://img.game8.co/3358326/b8ab0354c79f6abac0f296b42f770191.png/show"
      }
      ,
      Mũ: {
        type: "Tôn Giả",
        name: "Mũ",
        command: "!giveart 23443 30960 atk atk% 989001,2 cdmg,6 21",
        img: "https://img.game8.co/3358325/2683907802491dd00b5b67098f13a46b.png/show"
      }
    }
  },
  Sara: {
    name: Sara,
    artifacts: {
      Hoa: {
        type: "Dấu Ấn",
        name: "Hoa",
        command: "!giveart 24804 10001 501234 atk% cr cdmg,6 21",
        img: "https://img.game8.co/3397405/a433d977e1c7c160422861b1a086ea58.png/show"
      },
      Lông: {
        type: "Dấu Ấn",
        name: "Lông",
        command: "!giveart 94524 10003 501234 atk% cr cdmg,6 21",
        img: "https://img.game8.co/3397429/928992f15b32be9ed411db4d4bd69a4f.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Dấu Ấn",
        name: "Đồng Hồ",
        command: "!giveart 94554 10007 atk atk% cr cdmg,6 21",
        img: "https://img.game8.co/3397433/126495867ed9467e631fe05b5605b41b.png/show"
      }
      ,
      Ly: {
        type: "Dấu Ấn",
        name: "Ly",
        command: "!giveart 94514 10004 atk er cr cdmg,6 21",
        img: "https://img.game8.co/3397430/e0c85c3bb4c2e02116dc958fbfaf6185.png/show"
      }
      ,
      Mũ: {
        type: "Dấu Ấn",
        name: "Mũ",
        command: "!giveart 94534 30950 501234 atk% 989001,2 cr,6 21",
        img: "https://img.game8.co/3397431/c9c41d27b898d1fe5f08adbe676c9fc0.png/show"
      }
    }
  },
  Dori: {
    name: Dori,
    artifacts: {
      Hoa: {
        type: "Hoàng Kim",
        name: "Hoa",
        command: "!giveart 21544 10001 atk% atk cr cdmg,6 21",
        img: ""
      },
      Lông: {
        type: "Hoàng Kim",
        name: "Lông",
        command: "!giveart 21524 10003 atk% em cr cdmg,6 21",
        img: ""
      }
      ,
      Đồng_Hồ: {
        type: "Hoàng Kim",
        name: "Đồng Hồ",
        command: "!giveart 21554 10002 atk em cr cdmg,6 21",
        img: ""
      }
      ,
      Ly: {
        type: "Hoàng Kim",
        name: "Ly",
        command: "!giveart 21514 15009 atk% atk cr cdmg,6 21",
        img: ""
      }
      ,
      Mũ: {
        type: "Hoàng Kim",
        name: "Mũ",
        command: "!giveart 21534 30950 atk% atk 989001,2 cr,6 21",
        img: ""
      }
    }
  }
};

function Electro() {

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
            <th colSpan="4" style={{ color: '#a654de' }}>⚡️⚡️⚡️ Best of Artifact - Electro ⚡️⚡️⚡️</th>
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

export default Electro
