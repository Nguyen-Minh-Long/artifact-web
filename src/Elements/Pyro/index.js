import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Hutao from '../../CharacterImage/Hutao.png'
import Klee from '../../CharacterImage/Klee.png'
import Diluc from '../../CharacterImage/Diluc.png'
import Yoimiya from '../../CharacterImage/Yoimiya.png'


const Characters = {
  Hutao: {
    name: Hutao,
    artifacts: {
      Hoa: {
        type: "Ma Nữ",
        name: "Hoa",
        command: "!giveart 24684 10001 hp% atk% cr cdmg,6 21",
        img: "https://img.game8.co/3357138/4e6595d52b0c29bfebf15df76a976321.png/show"

      },
      Lông: {
        type: "Ma Nữ",
        name: "Lông",
        command: "!giveart 24682 10003 atk% hp% cr cdmg,6 21",
        img: "https://img.game8.co/3357140/7a6cb6ae67862ab7db9f297574fddfd8.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Ma Nữ",
        name: "Đồng Hồ",
        command: "!giveart 24685 10002 atk% em cr cdmg,6 21",
        img: "https://img.game8.co/3357142/50981e37675eae3fb2778c6e5afc0329.png/show"
      }
      ,
      Ly: {
        type: "Ma Nữ",
        name: "Ly",
        command: "!giveart 24681 15008 atk% hp% cr,6 cdmg 21",
        img: "https://img.game8.co/3357139/f0ff31bc35966edc4bdc8678808ddb5f.png/show"
      }
      ,
      Mũ: {
        type: "Ma Nữ",
        name: "Mũ",
        command: "!giveart 80534 30960 hp% em 989001,2 cdmg,6 21",
        img: "https://img.game8.co/3357141/c90f01b8f2ab96725b8bd1eef86e5db0.png/show"
      }
    }
  },
  Yoimiya: {
    name: Yoimiya,
    artifacts: {
      Hoa: {
        type: "Dòng Hồi Ức",
        name: "Hoa",
        command: "!giveart 24194 10001 atk atk% cr,6 cdmg 21",
        img: "https://img.game8.co/3397406/c57cbad645fd6d8360fc5dd16fe0ec3f.png/show"
      },
      Lông: {
        type: "Dòng Hồi Ức",
        name: "Lông",
        command: "!giveart 24192 10003 atk% em cr cdmg,6 21",
        img: "https://img.game8.co/3397427/2174d53e5449fcbfbcc0b8e89b11edcb.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Dòng Hồi Ức",
        name: "Đồng Hồ",
        command: "!giveart 24195 10004 atk em cr cdmg,6 21",
        img: "https://img.game8.co/3397432/a592e0c7c89b02cfba0906d67921415b.png/show"
      }
      ,
      Ly: {
        type: "Dòng Hồi Ức",
        name: "Ly",
        command: "!giveart 24191 15008 atk atk% cr cdmg,6 21",
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
  Klee: {
    name: Klee,
    artifacts: {
      Hoa: {
        type: "Ma Nữ",
        name: "Hoa",
        command: "!giveart 24684 10001 atk% em cr cdmg,6 21",
        img: "https://img.game8.co/3357138/4e6595d52b0c29bfebf15df76a976321.png/show"
      },
      Lông: {
        type: "Ma Nữ",
        name: "Lông",
        command: "!giveart 24682 10003 atk% em cr cdmg,6 21",
        img: "https://img.game8.co/3357140/7a6cb6ae67862ab7db9f297574fddfd8.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Ma Nữ",
        name: "Đồng Hồ",
        command: "!giveart 24685 10004 atk em cr cdmg,6 21",
        img: "https://img.game8.co/3357142/50981e37675eae3fb2778c6e5afc0329.png/show"
      }
      ,
      Ly: {
        type: "Ma Nữ",
        name: "Ly",
        command: "!giveart 24681 15008 atk% em cr cdmg,6 21",
        img: "https://img.game8.co/3357139/f0ff31bc35966edc4bdc8678808ddb5f.png/show"
      }
      ,
      Mũ: {
        type: "Ma Nữ",
        name: "Mũ",
        command: "!giveart 80534 30950 atk% em 989001,2 cr,6 21",
        img: "https://img.game8.co/3357141/c90f01b8f2ab96725b8bd1eef86e5db0.png/show"
      }
    }
  },
  Diluc: {
    name: Diluc,
    artifacts: {
      Hoa: {
        type: "Ma Nữ",
        name: "Hoa",
        command: "!giveart 24684 10001 atk% em cr cdmg,6 21",
        img: "https://img.game8.co/3357138/4e6595d52b0c29bfebf15df76a976321.png/show"
      },
      Lông: {
        type: "Ma Nữ",
        name: "Lông",
        command: "!giveart 24682 10003 atk% em cr cdmg,6 21",
        img: "https://img.game8.co/3357140/7a6cb6ae67862ab7db9f297574fddfd8.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Ma Nữ",
        name: "Đồng Hồ",
        command: "!giveart 24685 10004 atk em cr cdmg,6 21",
        img: "https://img.game8.co/3357142/50981e37675eae3fb2778c6e5afc0329.png/show"
      }
      ,
      Ly: {
        type: "Ma Nữ",
        name: "Ly",
        command: "!giveart 24681 15008 atk% em cr,6 cdmg 21",
        img: "https://img.game8.co/3357139/f0ff31bc35966edc4bdc8678808ddb5f.png/show"
      }
      ,
      Mũ: {
        type: "Ma Nữ",
        name: "Mũ",
        command: "!giveart 80534 30950 atk% em 989001,2 cr,6 21",
        img: "https://img.game8.co/3357141/c90f01b8f2ab96725b8bd1eef86e5db0.png/show"
      }
    }
  },
};

function Pyro() {

  const handleNotify = () => {
    toast.success('successful')
  }

  const CharactersValues = Object.values(Characters)

  const tbodies = CharactersValues.map((Characters, index) => {
    const ArtifactValues = Object.values(Characters.artifacts)
    const ArtifactRows = ArtifactValues.map((artifact, i) => {
      const CharactersName = i === 0 ? <td rowSpan={ArtifactValues.length + 1}>
        <img src={Characters.name} alt='Character' style={{ width: '300px', height: '300px' }} /></td> : null
      return (
        <tr key={i}>
          {CharactersName}
          <td><img src={artifact.img || ''} alt='' style={{ width: '12%' }} />&ensp; {artifact.type}</td>
          <td>{artifact.name}</td>
          <CopyToClipboard text={artifact.command}>
            <td onClick={handleNotify}><p className="noselect">&ensp; {artifact.command}</p></td>
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
            <th colSpan="4" style={{ color: '#eea271' }}>🔥🔥🔥 Best of Artifact - Pyro 🔥🔥🔥</th>
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

export default Pyro
