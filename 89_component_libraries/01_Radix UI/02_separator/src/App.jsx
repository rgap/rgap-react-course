import * as Separator from "@radix-ui/react-separator";
import "./App.css";

export default function App() {
  return (
    <main className="app">
      <section className="profileCard">
        <header className="profileHeader">
          <div>
            <h1>Account Settings</h1>
            <p>Manage your personal information and account preferences.</p>
          </div>

          <button className="primaryButton">Edit profile</button>
        </header>

        <Separator.Root
          className="separatorHorizontal"
          orientation="horizontal"
        />

        <section className="profileSummary">
          <div className="avatar">RG</div>

          <div className="profileInfo">
            <h2>Rel Guzman</h2>
            <p>Frontend Developer</p>
          </div>

          <Separator.Root
            className="separatorVertical"
            orientation="vertical"
            decorative
          />

          <div className="profileMeta">
            <span className="metaLabel">Status</span>
            <strong>Active</strong>
          </div>

          <Separator.Root
            className="separatorVertical"
            orientation="vertical"
            decorative
          />

          <div className="profileMeta">
            <span className="metaLabel">Role</span>
            <strong>Admin</strong>
          </div>
        </section>

        <Separator.Root
          className="separatorHorizontal"
          orientation="horizontal"
        />

        <section className="settingsSection">
          <h2>Security</h2>

          <div className="settingRow">
            <div>
              <h3>Password</h3>
              <p>Last updated 12 days ago.</p>
            </div>

            <button className="secondaryButton">Change</button>
          </div>

          <Separator.Root
            className="separatorHorizontal"
            orientation="horizontal"
          />

          <div className="settingRow">
            <div>
              <h3>Two-step verification</h3>
              <p>Add an extra layer of security to your account.</p>
            </div>

            <button className="secondaryButton">Enable</button>
          </div>
        </section>

        <Separator.Root
          className="separatorHorizontal"
          orientation="horizontal"
        />

        <footer className="cardFooter">
          <button className="dangerButton">Delete account</button>

          <div className="footerActions">
            <button className="secondaryButton">Cancel</button>

            <Separator.Root
              className="separatorVertical"
              orientation="vertical"
              decorative
            />

            <button className="primaryButton">Save changes</button>
          </div>
        </footer>
      </section>
    </main>
  );
}