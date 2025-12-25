import { Route } from "react-router-dom";
import BrowserRouterProvider from '@app/routes'
import PrivateAuthProvider from "@app/routes/guards/PrivateAuth";
import PublicAuthProvider from "@app/routes/guards/PublicAuth";
import Landing from "@app/features/landing/pages";
import SellCategoryIndex from "@app/features/property/pages/category";
import SellSubCategoryIndex from "@app/features/property/pages/subcategory/sellSubCategoryIndex";
import Ads from "@app/features/ads/pages";
import Chats from "@app/features/chats/pages";
import Profile from "@app/features/profile/pages";
import SubcategoryForm from "@app/features/property/pages/subcategory/subcategory";
import LoginPage from "@app/features/auth/pages/loginPage";
import SignupPage from "@app/features/auth/pages/signupPage";

const RoutesHandler = () => {    
    return (
      <BrowserRouterProvider>
        <Route element={<PrivateAuthProvider loginStatus={true} />}>
            <Route path="/" element={<Landing/>} />
        </Route>

        <Route element={<PublicAuthProvider loginStatus={false} />}>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/auth/signup" element={<SignupPage/>} />
          <Route path="/sell-category" element={<SellCategoryIndex/>} />
          <Route path="/sell-subcategory" element={<SellSubCategoryIndex/>} />
          <Route path="/sell-subcategory" element={<SellSubCategoryIndex/>} />
          <Route path="/my-ads" element={<Ads/>} />
          <Route path="/my-chats" element={<Chats/>} />
          <Route path="/my-profile" element={<Profile/>} />
          <Route path="/subcategory-form" element={<SubcategoryForm/>} />
        </Route>
      </BrowserRouterProvider>
    );
}

export default RoutesHandler;
    