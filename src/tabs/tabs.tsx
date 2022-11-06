import { Redirect, Route } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonPage,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { addCircle, settings, planet } from "ionicons/icons";
import "./tabs.scss";
import Home from "../pages/home/Home";
import Tab2 from "./../pages/Tab2";
import Settings from "./../pages/settings/Settings";
const TabsContainer: React.FC = () => {
  return (
    <IonPage>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/tab2">
              <Tab2 />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </IonRouterOutlet>
          {/* Create component of botton nav here:  */}
          <IonTabBar className="botton-bar" slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={planet} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="tab2" href="/tab2">
              <IonIcon className="add-buttom-icon" icon={addCircle} />
              <IonLabel></IonLabel>
            </IonTabButton>
            <IonTabButton tab="settings" href="/settings">
              <IonIcon icon={settings} />
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonPage>
  );
};

export default TabsContainer;
