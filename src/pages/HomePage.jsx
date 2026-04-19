import ProfileCard from "../components/home/ProfileCard";
import HighlightsNav from "../components/home/HighlightsNav";
import PostsGrid from "../components/home/PostsGrid";
import "../styles/home.css";

export default function HomePage() {
  return (
    <main className="home-page">
      <div className="home-shell">
        <ProfileCard />
        <HighlightsNav />
        <PostsGrid />
      </div>
    </main>
  );
}