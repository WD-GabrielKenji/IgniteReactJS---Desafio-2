import { memo } from "react";
import { Button } from "./Button";

interface SidebarProps {
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>;
}

function SideBarComponent({ handleClickButton, selectedGenreId, genres }: SidebarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}

export const SideBar = memo(SideBarComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.genres, nextProps.genres) && prevProps.selectedGenreId === nextProps.selectedGenreId;
});