import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Ganyu from '../../CharacterImage/Ganyu.png'
import Eula from '../../CharacterImage/Eula.png'
import Shenhe from '../../CharacterImage/Shenhe.png'
import Ayaka from '../../CharacterImage/Ayaka.png'

const Characters = {
  Ganyu: {
    name: Ganyu,
    artifacts: {
      Hoa: {
        type: "Đoàn Hát",
        name: "Hoa",
        command: "!giveart 77544 10001 atk atk% cr cdmg,6 21",
        img: "https://img.game8.co/3357189/fdfdc59fe3227f6513b722696a2de431.png/show"
      },
      Lông: {
        type: "Đoàn Hát",
        name: "Lông",
        command: "!giveart 77524 10003 atk% em cr cdmg,6 21",
        img: "https://img.game8.co/3357190/6a72fb2cee812a9b2be823ca55b551b5.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Đoàn Hát",
        name: "Đồng Hồ",
        command: "!giveart 77554 10004 atk em cr cdmg,6 21",
        img: "https://img.game8.co/3357193/c8cac6d966b6852a2da285b767948b77.png/show"
      }
      ,
      Ly: {
        type: "Đoàn Hát",
        name: "Ly",
        command: "!giveart 77514 15010 atk atk% cr cdmg,6 21",
        img: "https://img.game8.co/3357192/04e64da4decf292074fe75f2b529e067.png/show"
      }
      ,
      Mũ: {
        type: "Đoàn Hát",
        name: "Mũ",
        command: "!giveart 77534 30950 atk% em 989001,2 cr,6 21",
        img: "https://img.game8.co/3357191/d391d64b29acf6c949b760f3c60aac18.png/show"
      }
    }
  },
  Ayaka: {
    name: Ayaka,
    artifacts: {
      Hoa: {
        type: "Băng Dũng Sĩ",
        name: "Hoa",
        command: "!giveart 23454 10001 atk atk% cr cdmg,6 21",
        img: "https://img.game8.co/3357128/2db83f8d580810ad99bfffb410dc2d86.png/show"
      },
      Lông: {
        type: "Băng Dũng Sĩ",
        name: "Lông",
        command: "!giveart 23452 10003 atk% em cr cdmg,6 21",
        img: "https://img.game8.co/3357131/55b0d11e84b939c539f3e8a8f81e04ba.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Băng Dũng Sĩ",
        name: "Đồng Hồ",
        command: "!giveart 23455 10004 atk em cr cdmg,6 21",
        img: "https://img.game8.co/3357132/f0d8b62861fba1fbc6263fb509ba1ab2.png/show"
      }
      ,
      Ly: {
        type: "Băng Dũng Sĩ",
        name: "Ly",
        command: "!giveart 23451 15010 atk atk% cr cdmg,6 21",
        img: "https://img.game8.co/3357129/47122a9835ec7a5591e8e4b6467182fe.png/show"
      }
      ,
      Mũ: {
        type: "Băng Dũng Sĩ",
        name: "Mũ",
        command: "!giveart 71534 30950 atk% atk 989001,2 cr,6 21",
        img: "https://img.game8.co/3357130/9d1e0adbb671a0c97cd1dab36dff26f4.png/show"
      }
    }
  },
  Shenhe: {
    name: Shenhe,
    artifacts: {
      Hoa: {
        type: "Giác Đấu Sĩ",
        name: "Hoa",
        command: "!giveart 24194 10001 atk atk%,6 cr cdmg 21",
        img: "https://img.game8.co/3357144/3d2b0affd32f16c9a5aff0af91ba81f3.png/show"
      },
      Lông: {
        type: "Giác Đấu Sĩ",
        name: "Lông",
        command: "!giveart 24192 10003 atk%,6 em cr cdmg 21",
        img: "https://img.game8.co/3357143/4e94ca3572c48b7ac120bda8f4518abc.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Dòng Hồi Ức",
        name: "Đồng Hồ",
        command: "!giveart 24195 10004 atk,6 em cr cdmg 21",
        img: "https://img.game8.co/3397432/a592e0c7c89b02cfba0906d67921415b.png/show"
      }
      ,
      Ly: {
        type: "Dòng Hồi Ức",
        name: "Ly",
        command: "!giveart 75514 10004 atk,6 em cr cdmg 21",
        img: "https://img.game8.co/3397426/c7e39a858bee158ca040e0032dcfbb41.png/show"
      }
      ,
      Mũ: {
        type: "Dòng Hồi Ức",
        name: "Mũ",
        command: "!giveart 24193 30990 cdmg cr 989001,2 atk,6 21",
        img: "https://img.game8.co/3397428/7d12f9e3cb1549d8de9e82dcdcfafeba.png/show"
      }
    }
  },
  Eula: {
    name: Eula,
    artifacts: {
      Hoa: {
        type: "Lửa Trắng Xám",
        name: "Hoa",
        command: "!giveart 23554 10001 atk atk% cr cdmg,6 21",
        img: "https://img.game8.co/3346878/7965c258284812405bd8822b930a1e69.png/show"
      },
      Lông: {
        type: "Lửa Trắng Xám",
        name: "Lông",
        command: "!giveart 24662 10003 atk% em cr cdmg,6 21",
        img: "https://img.game8.co/3346880/39f7eee8fe3e15ef4844bb9da037542d.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Lửa Trắng Xám",
        name: "Đồng Hồ",
        command: "!giveart 24665 10004 atk em cr cdmg,6 21",
        img: "https://img.game8.co/3346875/249e4d370579b3a29803430b66d6ffaa.png/show"
      }
      ,
      Ly: {
        type: "Lửa Trắng Xám",
        name: "Ly",
        command: "!giveart 92514 15015 atk atk% cr,6 cdmg 21",
        img: "https://img.game8.co/3346873/7cd12a74e382b0d30568bc78d312d15c.png/show"
      }
      ,
      Mũ: {
        type: "Lửa Trắng Xám",
        name: "Mũ",
        command: "!giveart 92534 30960 atk% atk 989001,2 cdmg,6 21",
        img: "https://img.game8.co/3346882/84faf6f0ac44ebec7bcda4ec1e809981.png/show"
      }
    }
  },
};

function Cryo() {

  const handleNotify = () => {
    toast.success('successful')
  }

  const CharactersValues = Object.values(Characters)

  const tbodies = CharactersValues.map((Characters, index) => {
    const ArtifactValues = Object.values(Characters.artifacts)
    const ArtifactRows = ArtifactValues.map((artifact, i) => {
      const CharactersName = i === 0 ? <td rowSpan={ArtifactValues.length + 1}>
        <img src={Characters.name} alt='Character' style={{width: '300px', height: '300px'}}/></td> : null
      return (
        <tr key={i}>
          {CharactersName}
          <td><img src={artifact.img || ''} alt='' style={{ width: '12%' }} />&ensp; {artifact.type}</td>
          <td>{artifact.name}</td>
          <CopyToClipboard text={artifact.command}>
            <td onClick={handleNotify}><p className="noselect">{artifact.command}</p></td>
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
            <th colSpan="4" style={{ color: '#aff8f6' }}>❄️❄️❄️ Best of Artifact - Cryo ❄️❄️❄️</th>
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

export default Cryo
