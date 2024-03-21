import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from './pages/home/Home';
import "./App.css";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";
import RegisterPage from "./pages/register/RegisterPage";
import LoginPage from "./pages/login/LoginPage";
import ProfilePage from "./pages/profile/ProfilePage";
import AdminLayout from "./pages/admin/AdminLayout";
import Admin from "./pages/admin/screens/Admin";
import Comments from "./pages/admin/screens/comments/Comments";
import Users from "./pages/admin/screens/users/Users";
import ManagePosts from "./pages/admin/screens/posts/ManagePosts";
import EditPost from "./pages/admin/screens/posts/EditPost";
import Article from "./pages/articles/Article";
import Search from "./pages/search/Search";
import Categories from "./pages/admin/screens/categories/Categories";
import EditCategories from "./pages/admin/screens/categories/EditCategories";

function App() {
  return (
    <div className="App overflow-hidden font-opensans">
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<ArticleDetailPage />} />
        <Route path="/blog" element={<Article />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/search/:key" element={<Search />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} />
          <Route path="comments" element={<Comments />} />
          <Route path="users/manage" element={<Users />} />
          <Route path="posts/manage" element={<ManagePosts />} />
          <Route path="categories/manage" element={<Categories />} />
          <Route path="posts/manage/edit/:slug" element={<EditPost />} />
          <Route path="categories/manage/edit/:slug" element={<EditCategories />}
          />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
