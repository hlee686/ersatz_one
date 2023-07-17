import { Route, Routes } from "react-router-dom";
import { BELabs } from "./pages/BE-Labs";
import { EmailLogin } from "./pages/EmailLogin";
import { WorkflowLabs } from "./pages/Workflow-Labs";
import { SignFinishPage } from "./pages/SignFinishPage";
import { Home } from "./pages/Home";
import { NewPost } from "./pages/NewPost";
import { Login } from "./pages/Login";
import { Navigate } from "react-router-dom";

import {loginAtom} from "./pages/Atom"
import { useAtomValue } from "jotai";

function App() {

  const isLoggedin = useAtomValue(loginAtom)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/newPost" element={<NewPost />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/be-labs" element={<BELabs />} />
      <Route path="/emailLogin" element={<EmailLogin />} />
      <Route path="/workflow" element={<WorkflowLabs />} />
      <Route path="/fishSignup" element={<SignFinishPage />} />
    </Routes>
  );
}

export default App;
