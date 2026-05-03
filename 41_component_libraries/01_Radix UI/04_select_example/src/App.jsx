import * as Select from "@radix-ui/react-select";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [role, setRole] = useState("viewer");

  return (
    <main className="app">
      <section className="card">
        <h1>User Settings</h1>

        <p className="description">
          Select the role that this user should have inside the system.
        </p>

        <div className="field">
          <label className="label" htmlFor="role-select">
            User role
          </label>

          <Select.Root value={role} onValueChange={setRole}>
            <Select.Trigger id="role-select" className="selectTrigger">
              <Select.Value placeholder="Select a role" />
              <Select.Icon className="selectIcon">▼</Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content className="selectContent" position="popper">
                <Select.Viewport className="selectViewport">
                  <Select.Item className="selectItem" value="viewer">
                    <Select.ItemText>Viewer</Select.ItemText>
                  </Select.Item>

                  <Select.Item className="selectItem" value="editor">
                    <Select.ItemText>Editor</Select.ItemText>
                  </Select.Item>

                  <Select.Item className="selectItem" value="admin">
                    <Select.ItemText>Admin</Select.ItemText>
                  </Select.Item>
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>

        <div className="resultBox">
          <span>Selected role:</span>
          <strong>{role}</strong>
        </div>
      </section>
    </main>
  );
}