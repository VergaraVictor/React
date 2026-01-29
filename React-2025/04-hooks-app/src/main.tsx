import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'

// import { HooksApp } from './HooksApp'

import './index.css';
import { ProfessionalApp } from './09-useContext/ProfessionalApp';
// import { ClienteInformation } from './08-use-suspense/ClienteInformation';
// import { getUserAction } from './08-use-suspense/api/get-user.actions';
// import { InstagromApp } from './07-useOptimistic/InstagromApp';
// import { MemoCounter } from './06-memos/MemoCounter';
// import { MemoHook } from './06-memos/MemoHook';
// import { ScrambleWords } from './05-useReducer/reducer/ScrambleWords';
// import { TasksApp } from './05-useReducer/TaskApp';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { PokemonPage } from './03-examples/PokemonPage';
// import { TrafficLightWithEffectWithHook } from './02-useEffect/TrafficLightWithEffectWithHook';
// import { TrafficLight } from './01-useState/TrafficLight';
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithEffectWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    {/* <Suspense
      fallback={
        <div className="bg-gradient flex flex-col">
          <h1 className="text-2xl">Cargando</h1>
        </div>
      }
    >
      <ClienteInformation getUser={getUserAction(1001)} />
    </Suspense> */}
    <ProfessionalApp />
  </StrictMode>,
)
