import React from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../config.json';



function Titulo(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
    </>
  );
}

// Componente React
// function HomePage() {
//     // JSX
//     return (
//         <div>
//             <GlobalStyle />
//             <Titulo tag="h2">Boas vindas de volta!</Titulo>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     )
// }
// export default HomePage

export default function PaginaInicial() {
  // const username = 'alexandrelucano';
  const [username, setUsername] = React.useState('alexandrelucano');
  const roteamento = useRouter();

  return (
    <>
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: '#111b3e',
          backgroundImage: appConfig.theme.background,
          backgroundPosition: 'center center',
          // backgroundImage: 'radial-gradient(at 47% 33%, hsl(206.67, 43%, 92%) 0, transparent 59%), radial-gradient(at 82% 65%, hsl(88.65, 73%, 48%) 0, transparent 55%)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover',         }}
      >
        <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            border: '1px solid rgba(209, 213, 219, 0.3)',
            borderRadius: '12px', padding: '32px', margin: '12px',
            boxShadow: '10px 10px 10px rgba(30,30,30,0.5)',
            backgroundColor: 'rgba(17, 25, 40, 0.75)',
            backdropFilter: 'blur(16px)'
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={(event) => {
              event.preventDefault()
              roteamento.push(`/chat?username=${username}`);
            }}
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
            }}
          >
            <Titulo
              styleSheet={{
                boxShadow: '10px 10px 10px rgba(250,250,250,0.5)',
              }}
            tag="h2">Boas vindas de volta!</Titulo>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>

            <TextField
              styleSheet={{
                boxShadow: '10px 10px 10px rgba(30,30,30,0.5)',
              }}
              fullWidth
              value={username}
              onChange={(event)=> {
                const userValue = event.target.value;
                setUsername(event.target.value)
              }}
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              styleSheet={{
                backgroundImage: 'linear-gradient(to right, #DA22FFcc 0%, #9733EE  51%, #DA22FFcc  100%)',
                transition: '0.5s',
                boxShadow: '10px 10px 10px #DA22FF33'
              }}
              type='submit'
              label='Entrar'
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: 'black',
                mainColorLight: 'green',
                mainColorStrong: 'red',
              }}
            />
          </Box>
          {/* Formulário */}


          {/* Photo Area */}
          <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[80095],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
              boxShadow: '10px 10px 10px rgba(30,30,30,0.5)',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}