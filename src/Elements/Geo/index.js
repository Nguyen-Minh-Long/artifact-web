import React from 'react';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Zhongli from '../../CharacterImage/Zhongli.png'
import Albedo from '../../CharacterImage/Albedo.png'
import Itto from '../../CharacterImage/Itto.png'
import Yunjin from '../../CharacterImage/Yunjin.png'
import Gorou from '../../CharacterImage/Gorou.png'
import Ningguang from '../../CharacterImage/Ningguang.png'

const Characters = {
  Zhongli: {
    name: Zhongli,
    artifacts: {
      Hoa: {
        type: "Thiên Nham",
        name: "Hoa",
        command: "!giveart 24224 10001 hp% atk% cr cdmg,6 21",
        img: "https://img.game8.co/3346877/5838da412d43bcacfc0dda873ca64a54.png/show"

      },
      Lông: {
        type: "Thiên Nham",
        name: "Lông",
        command: "!giveart 24222 10003 hp% atk% cr cdmg,6 21",
        img: "https://img.game8.co/3346876/532abee54bcc8a161d9f943b9c76db72.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Thiên Nham",
        name: "Đồng Hồ",
        command: "!giveart 24225 10002 atk% hp cr cdmg,6 21",
        img: "https://img.game8.co/3346881/94968cb6fb25b12f2868e041d901b93f.png/show"
      }
      ,
      Ly: {
        type: "Thiên Nham",
        name: "Ly",
        command: "!giveart 24221 15013 hp% atk% cr,6 cdmg 21",
        img: "https://img.game8.co/3346879/4596584038c08eb792e4bac687ccb8dd.png/show"
      }
      ,
      Mũ: {
        type: "Thiên Nham",
        name: "Mũ",
        command: "!giveart 24223 30960 hp% atk% 989001,2 cdmg,6 21",
        img: "https://img.game8.co/3346874/27f99b6c8ecf5011162520464b8c3ee5.png/show"
      }
    }
  },
  Albedo: {
    name: Albedo,
    artifacts: {
      Hoa: {
        type: "Phù Hoa",
        name: "Hoa",
        command: "!giveart 95544 10001 atk% def% cr cdmg,6 21",
        img: "https://img.game8.co/3453210/f3a8e68db064a7f60fbd482e07ade454.png/show"
      },
      Lông: {
        type: "Phù Hoa",
        name: "Lông",
        command: "!giveart 95524 10003 atk% def% cr cdmg,6 21",
        img: "https://img.game8.co/3453734/7f4f670aaae1b030a2ea6ddd3fc02ae9.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Phù Hoa",
        name: "Đồng Hồ",
        command: "!giveart 95554 10006 atk% def cr cdmg,6 21",
        img: "https://img.game8.co/3453736/c3774b1f61d6a46173645889bcbbc87d.png/show"
      }
      ,
      Ly: {
        type: "Phù Hoa",
        name: "Ly",
        command: "!giveart 95514 15013 atk% def% cr,6 cdmg 21",
        img: "https://img.game8.co/3453206/47e3ce6c3d35271139f464c988d1db92.png/show"
      }
      ,
      Mũ: {
        type: "Phù Hoa",
        name: "Mũ",
        command: "!giveart 95534 30960 def% atk% 989001,2 cdmg,6 21",
        img: "https://img.game8.co/3453205/2ca6777afb1723a5e745effb8caa4e02.png/show"
      }
    }
  },
  Itto: {
    name: Itto,
    artifacts: {
      Hoa: {
        type: "Phù Hoa",
        name: "Hoa",
        command: "!giveart 95544 10001 atk% def% cr cdmg,6 21",
        img: "https://img.game8.co/3453210/f3a8e68db064a7f60fbd482e07ade454.png/show"
      },
      Lông: {
        type: "Phù Hoa",
        name: "Lông",
        command: "!giveart 95524 10003 atk% def% cr cdmg,6 21",
        img: "https://img.game8.co/3453734/7f4f670aaae1b030a2ea6ddd3fc02ae9.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Phù Hoa",
        name: "Đồng Hồ",
        command: "!giveart 95554 10006 atk% def cr cdmg,6 21",
        img: "https://img.game8.co/3453736/c3774b1f61d6a46173645889bcbbc87d.png/show"
      }
      ,
      Ly: {
        type: "Phù Hoa",
        name: "Ly",
        command: "!giveart 95514 15013 atk% def% cr,6 cdmg 21",
        img: "https://img.game8.co/3453206/47e3ce6c3d35271139f464c988d1db92.png/show"
      }
      ,
      Mũ: {
        type: "Phù Hoa",
        name: "Mũ",
        command: "!giveart 95534 30950 def% atk% 989001,2 cr,6 21",
        img: "https://img.game8.co/3453205/2ca6777afb1723a5e745effb8caa4e02.png/show"
      }
    }
  },
  Yunjin: {
    name: Yunjin,
    artifacts: {
      Hoa: {
        type: "Phù Hoa",
        name: "Hoa",
        command: "!giveart 95544 10001 atk% def%,6 cr cdmg 21",
        img: "https://img.game8.co/3453210/f3a8e68db064a7f60fbd482e07ade454.png/show"
      },
      Lông: {
        type: "Phù Hoa",
        name: "Lông",
        command: "!giveart 95524 10003 atk% def%,6 cr cdmg 21",
        img: "https://img.game8.co/3453734/7f4f670aaae1b030a2ea6ddd3fc02ae9.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Phù Hoa",
        name: "Đồng Hồ",
        command: "!giveart 95554 10006 atk% def,6 cr cdmg 21",
        img: "https://img.game8.co/3453736/c3774b1f61d6a46173645889bcbbc87d.png/show"
      }
      ,
      Ly: {
        type: "Phù Hoa",
        name: "Ly",
        command: "!giveart 95514 10006 atk% def,6 cr cdmg 21",
        img: "https://img.game8.co/3453206/47e3ce6c3d35271139f464c988d1db92.png/show"
      }
      ,
      Mũ: {
        type: "Phù Hoa",
        name: "Mũ",
        command: "!giveart 95534 10006 def,6 cr cdmg 989001,2 21",
        img: "https://img.game8.co/3453205/2ca6777afb1723a5e745effb8caa4e02.png/show"
      }
    }
  },
  Gorou: {
    name: Gorou,
    artifacts: {
      Hoa: {
        type: "Phù Hoa",
        name: "Hoa",
        command: "!giveart 95544 10001 atk% def%,6 cr cdmg 21",
        img: "https://img.game8.co/3453210/f3a8e68db064a7f60fbd482e07ade454.png/show"
      },
      Lông: {
        type: "Phù Hoa",
        name: "Lông",
        command: "!giveart 95524 10003 atk% def%,6 cr cdmg 21",
        img: "https://img.game8.co/3453734/7f4f670aaae1b030a2ea6ddd3fc02ae9.png/show"
      }
      ,
      Đồng_Hồ: {
        type: "Phù Hoa",
        name: "Đồng Hồ",
        command: "!giveart 95554 10006 atk% def,6 cr cdmg 21",
        img: "https://img.game8.co/3453736/c3774b1f61d6a46173645889bcbbc87d.png/show"
      }
      ,
      Ly: {
        type: "Phù Hoa",
        name: "Ly",
        command: "!giveart 95514 10006 atk% def,6 cr cdmg 21",
        img: "https://img.game8.co/3453206/47e3ce6c3d35271139f464c988d1db92.png/show"
      }
      ,
      Mũ: {
        type: "Phù Hoa",
        name: "Mũ",
        command: "!giveart 95534 10006 def,6 cr cdmg 989001,2 21",
        img: "https://img.game8.co/3453205/2ca6777afb1723a5e745effb8caa4e02.png/show"
      }
    }
  },
};

function Geo() {

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
            <th colSpan="4" style={{ color: '#ddb41f' }}>🌕🌕🌕 Best of Artifact - Geo 🌕🌕🌕</th>
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

export default Geo
