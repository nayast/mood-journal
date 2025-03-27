import BookIcon from '@mui/icons-material/Book'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PetsIcon from '@mui/icons-material/Pets';

export const drawerList = [
    {
        id: 0,
        title: "Diary",
        icon: <BookIcon/>,
        navigate: "/diary"
    },
    {
        id: 1,
        title: "Mood",
        icon: <EmojiEmotionsIcon/>,
        navigate: "/mood"
    },
    {
        id: 2,
        title: "Stats",
        icon: <AutoGraphIcon/>,
        navigate: "/stats"
    },
    {
        id: 3,
        title: "meow",
        icon: <PetsIcon/>,
        navigate: "/meow"
    }
]