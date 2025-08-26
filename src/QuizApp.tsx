"use client";
import { useState } from "react";

type Question = {
  question: string;
  options: string[];
  answer: number; // index of correct option
};

type AnimeCategory = {
  title: string;
  imagePlaceholder: string;
  questions: Question[];
};

// Comprehensive anime question bank organized by category
const animeCategories: AnimeCategory[] = [
  {
    title: "Jujutsu Kaisen",
    imagePlaceholder: "/images/jujutsu-kaisen.jpg",
    questions: [
      {
        question: "Who is the main character of Jujutsu Kaisen?",
        options: ["Yuji Itadori", "Gojo Satoru", "Megumi Fushiguro", "Nobara Kugisaki"],
        answer: 0,
      },
      {
        question: "What cursed object does Yuji swallow?",
        options: ["Sukuna's finger", "Gojo's blindfold", "Megumi's shikigami", "Nobara's hammer"],
        answer: 0,
      },
      {
        question: "What color is Gojo's blindfold?",
        options: ["Black", "White", "Blue", "Red"],
        answer: 0,
      },
      {
        question: "Who uses shikigami animals?",
        options: ["Yuji Itadori", "Gojo Satoru", "Megumi Fushiguro", "Nobara Kugisaki"],
        answer: 2,
      },
      {
        question: "What weapon does Nobara use?",
        options: ["Hammer and nails", "Sword", "Bow and arrow", "Spear"],
        answer: 0,
      },
      {
        question: "What food does Sukuna dislike?",
        options: ["Sushi", "Ramen", "Curry", "Tempura"],
        answer: 0,
      },
      {
        question: "Who is known as the King of Curses?",
        options: ["Gojo Satoru", "Sukuna", "Mahito", "Jogo"],
        answer: 1,
      },
      {
        question: "Who is Panda's best friend?",
        options: ["Yuji", "Megumi", "Toge", "Maki"],
        answer: 2,
      },
      {
        question: "Which word does Toge use to tell people to run?",
        options: ["Run", "Go", "Move", "Retreat"],
        answer: 1,
      },
      {
        question: "Who is Yuji's mentor?",
        options: ["Gojo Satoru", "Nanami", "Geto", "Yaga"],
        answer: 0,
      },
      {
        question: "Which year did the anime debut?",
        options: ["2019", "2020", "2021", "2022"],
        answer: 1,
      },
      {
        question: "What is the school called?",
        options: ["Tokyo Jujutsu High", "Kyoto Jujutsu High", "Osaka Jujutsu High", "Yokohama Jujutsu High"],
        answer: 0,
      },
      {
        question: "Who has the Limitless technique?",
        options: ["Yuji Itadori", "Gojo Satoru", "Megumi Fushiguro", "Nobara Kugisaki"],
        answer: 1,
      },
      {
        question: "What's the first curse Yuji fights?",
        options: ["Finger Bearer", "Mahito", "Jogo", "Hanami"],
        answer: 0,
      },
      {
        question: "Who is Yuji's grandfather?",
        options: ["Wasuke Itadori", "Kenji Itadori", "Takeshi Itadori", "Hiroshi Itadori"],
        answer: 0,
      },
      {
        question: "What type of animal can Panda transform into?",
        options: ["Bear", "Panda", "Gorilla", "Monkey"],
        answer: 0,
      },
      {
        question: "Who is the main villain in Season 1?",
        options: ["Mahito", "Jogo", "Hanami", "Dagon"],
        answer: 0,
      },
      {
        question: "What color is Yuji's hair?",
        options: ["Black", "Brown", "Blonde", "Red"],
        answer: 0,
      },
      {
        question: "Who is Megumi's sister?",
        options: ["Tsumiki", "Maki", "Nobara", "Miwa"],
        answer: 0,
      },
      {
        question: "What is Gojo's eye technique called?",
        options: ["Six Eyes", "Limitless", "Infinity", "Purple"],
        answer: 0,
      }
    ]
  },
  {
    title: "Attack on Titan",
    imagePlaceholder: "/images/attack-on-titan.jpg",
    questions: [
      {
        question: "Who is the main character of Attack on Titan?",
        options: ["Eren Yeager", "Mikasa Ackerman", "Armin Arlert", "Levi Ackerman"],
        answer: 0,
      },
      {
        question: "What is Eren's adopted sister's name?",
        options: ["Mikasa Ackerman", "Historia Reiss", "Sasha Braus", "Ymir"],
        answer: 0,
      },
      {
        question: "Who is the commander of the Survey Corps?",
        options: ["Erwin Smith", "Levi Ackerman", "Hange Zoe", "Keith Shadis"],
        answer: 0,
      },
      {
        question: "What walls protect humanity?",
        options: ["Maria, Rose, Sina", "Alpha, Beta, Gamma", "North, South, East", "Inner, Middle, Outer"],
        answer: 0,
      },
      {
        question: "Who is known for their love of potatoes?",
        options: ["Sasha Braus", "Connie Springer", "Jean Kirstein", "Marco Bott"],
        answer: 0,
      },
      {
        question: "What is Levi's specialty?",
        options: ["3D Maneuver Gear", "Thunder Spears", "Cannons", "Swords"],
        answer: 0,
      },
      {
        question: "What titan is Eren able to transform into?",
        options: ["Attack Titan", "Colossal Titan", "Armored Titan", "Beast Titan"],
        answer: 0,
      },
      {
        question: "Who kills Eren's mother?",
        options: ["Dina Fritz", "Annie Leonhart", "Reiner Braun", "Bertholdt Hoover"],
        answer: 0,
      },
      {
        question: "What year did the anime begin?",
        options: ["2012", "2013", "2014", "2015"],
        answer: 1,
      },
      {
        question: "What weapon is used to fight titans?",
        options: ["3D Maneuver Gear", "Thunder Spears", "Cannons", "All of the above"],
        answer: 3,
      },
      {
        question: "What is Armin's dream?",
        options: ["To see the ocean", "To kill all titans", "To become a soldier", "To protect humanity"],
        answer: 0,
      },
      {
        question: "What's the tallest titan called?",
        options: ["Colossal Titan", "Beast Titan", "Attack Titan", "Armored Titan"],
        answer: 0,
      },
      {
        question: "What group do the soldiers belong to?",
        options: ["Survey Corps", "Military Police", "Garrison", "All of the above"],
        answer: 3,
      },
      {
        question: "What's inside the walls?",
        options: ["Humans", "Titans", "Nothing", "Resources"],
        answer: 0,
      },
      {
        question: "Who is Historia's true identity?",
        options: ["Krista Lenz", "Historia Reiss", "Ymir", "Frieda Reiss"],
        answer: 1,
      },
      {
        question: "Who was the Armored Titan?",
        options: ["Reiner Braun", "Bertholdt Hoover", "Annie Leonhart", "Zeke Yeager"],
        answer: 0,
      },
      {
        question: "Who was the Colossal Titan?",
        options: ["Reiner Braun", "Bertholdt Hoover", "Annie Leonhart", "Zeke Yeager"],
        answer: 1,
      },
      {
        question: "What country attacks Paradis?",
        options: ["Marley", "Eldia", "Hizuru", "Mid-East Alliance"],
        answer: 0,
      },
      {
        question: "Who is Hange obsessed with?",
        options: ["Titans", "Levi", "Erwin", "Science"],
        answer: 0,
      },
      {
        question: "What phrase is shouted before battle?",
        options: ["Shinzou wo sasageyo!", "Tatakae!", "Susume!", "All of the above"],
        answer: 3,
      }
    ]
  },
  {
    title: "One Piece",
    imagePlaceholder: "/images/one-piece.jpg",
    questions: [
      {
        question: "Who is the main character of One Piece?",
        options: ["Monkey D. Luffy", "Roronoa Zoro", "Nami", "Usopp"],
        answer: 0,
      },
      {
        question: "What fruit did Luffy eat?",
        options: ["Gum-Gum Fruit", "Flame-Flame Fruit", "Ice-Ice Fruit", "Thunder-Thunder Fruit"],
        answer: 0,
      },
      {
        question: "What does the fruit give him?",
        options: ["Rubber body", "Fire powers", "Ice powers", "Lightning powers"],
        answer: 0,
      },
      {
        question: "Who is Luffy's first crewmate?",
        options: ["Roronoa Zoro", "Nami", "Usopp", "Sanji"],
        answer: 0,
      },
      {
        question: "Who is the ship's navigator?",
        options: ["Nami", "Robin", "Vivi", "Carrot"],
        answer: 0,
      },
      {
        question: "What is the crew's first ship called?",
        options: ["Going Merry", "Thousand Sunny", "Red Force", "Oro Jackson"],
        answer: 0,
      },
      {
        question: "What is Zoro's dream?",
        options: ["To become the world's greatest swordsman", "To find the One Piece", "To become a pirate king", "To protect his friends"],
        answer: 0,
      },
      {
        question: "Who cooks for the crew?",
        options: ["Sanji", "Nami", "Robin", "Chopper"],
        answer: 0,
      },
      {
        question: "Who is the doctor of the crew?",
        options: ["Tony Tony Chopper", "Nami", "Robin", "Brook"],
        answer: 0,
      },
      {
        question: "What animal is Chopper?",
        options: ["Reindeer", "Deer", "Elk", "Moose"],
        answer: 0,
      },
      {
        question: "What is Nami's favorite thing?",
        options: ["Money", "Oranges", "Maps", "Weather"],
        answer: 0,
      },
      {
        question: "Who is the shipwright of the crew?",
        options: ["Franky", "Usopp", "Jinbe", "Brook"],
        answer: 0,
      },
      {
        question: "Who is the musician of the crew?",
        options: ["Brook", "Nami", "Robin", "Chopper"],
        answer: 0,
      },
      {
        question: "What treasure are they searching for?",
        options: ["One Piece", "Gold", "Diamonds", "Power"],
        answer: 0,
      },
      {
        question: "Who gave Luffy his straw hat?",
        options: ["Shanks", "Roger", "Dragon", "Garp"],
        answer: 0,
      },
      {
        question: "Who are the Yonko?",
        options: ["Four Emperors", "Seven Warlords", "Marine Admirals", "Revolutionary Army"],
        answer: 0,
      },
      {
        question: "What island is Nami from?",
        options: ["Cocoyasi Village", "Shells Town", "Orange Town", "Syrup Village"],
        answer: 0,
      },
      {
        question: "Who is Ace to Luffy?",
        options: ["Brother", "Father", "Friend", "Crewmate"],
        answer: 0,
      },
      {
        question: "Who is the sniper of the crew?",
        options: ["Usopp", "Nami", "Robin", "Brook"],
        answer: 0,
      },
      {
        question: "What sea does the story begin in?",
        options: ["East Blue", "West Blue", "North Blue", "South Blue"],
        answer: 0,
      }
    ]
  },
  {
    title: "Demon Slayer: Kimetsu no Yaiba",
    imagePlaceholder: "/images/demon-slayer.jpg",
    questions: [
      {
        question: "Who is the main character of Demon Slayer?",
        options: ["Tanjiro Kamado", "Nezuko Kamado", "Zenitsu Agatsuma", "Inosuke Hashibira"],
        answer: 0,
      },
      {
        question: "What happened to Tanjiro's family?",
        options: ["Killed by demons", "Killed by humans", "Killed by animals", "Killed by disease"],
        answer: 0,
      },
      {
        question: "Who is Tanjiro's demon sister?",
        options: ["Nezuko Kamado", "Takeo Kamado", "Hanako Kamado", "Shigeru Kamado"],
        answer: 0,
      },
      {
        question: "What is the name of the demon slayer organization?",
        options: ["Demon Slayer Corps", "Demon Hunters", "Demon Exterminators", "Demon Warriors"],
        answer: 0,
      },
      {
        question: "What color is Tanjiro's checkered coat?",
        options: ["Black and green", "Red and black", "Blue and white", "Purple and gold"],
        answer: 0,
      },
      {
        question: "What breathing style does Tanjiro use?",
        options: ["Water Breathing", "Fire Breathing", "Thunder Breathing", "Wind Breathing"],
        answer: 0,
      },
      {
        question: "Who is Tanjiro's best friend at the corps?",
        options: ["Zenitsu Agatsuma", "Inosuke Hashibira", "Genya Shinazugawa", "Kanao Tsuyuri"],
        answer: 0,
      },
      {
        question: "Who wears a boar mask?",
        options: ["Inosuke Hashibira", "Zenitsu Agatsuma", "Genya Shinazugawa", "Kanao Tsuyuri"],
        answer: 0,
      },
      {
        question: "What weapon do demon slayers use?",
        options: ["Nichirin Blades", "Regular swords", "Guns", "Bows"],
        answer: 0,
      },
      {
        question: "Who is the leader of the demon slayers?",
        options: ["Kagaya Ubuyashiki", "Tengen Uzui", "Kyojuro Rengoku", "Giyu Tomioka"],
        answer: 0,
      },
      {
        question: "What is Nezuko's main power?",
        options: ["Blood Demon Art", "Fire", "Ice", "Lightning"],
        answer: 0,
      },
      {
        question: "Who is the strongest demon?",
        options: ["Muzan Kibutsuji", "Kokushibo", "Akaza", "Doma"],
        answer: 0,
      },
      {
        question: "Who trained Tanjiro?",
        options: ["Sakonji Urokodaki", "Giyu Tomioka", "Kyojuro Rengoku", "Tengen Uzui"],
        answer: 0,
      },
      {
        question: "What rank are the elite demon slayers?",
        options: ["Hashira", "Kinoe", "Kinoto", "Mizunoto"],
        answer: 0,
      },
      {
        question: "What is Zenitsu afraid of?",
        options: ["Demons", "Heights", "Darkness", "Everything"],
        answer: 0,
      },
      {
        question: "What does Tanjiro smell to track demons?",
        options: ["Blood scent", "Demon scent", "Fear scent", "All scents"],
        answer: 0,
      },
      {
        question: "Who is the Water Hashira?",
        options: ["Giyu Tomioka", "Kyojuro Rengoku", "Tengen Uzui", "Mitsuri Kanroji"],
        answer: 0,
      },
      {
        question: "Who is the Flame Hashira?",
        options: ["Kyojuro Rengoku", "Giyu Tomioka", "Tengen Uzui", "Mitsuri Kanroji"],
        answer: 0,
      },
      {
        question: "What flower weakens demons?",
        options: ["Wisteria", "Cherry blossom", "Rose", "Lotus"],
        answer: 0,
      },
      {
        question: "What is the title of the hit movie sequel?",
        options: ["Demon Slayer: Mugen Train", "Demon Slayer: Entertainment District", "Demon Slayer: Swordsmith Village", "Demon Slayer: Hashira Training"],
        answer: 0,
      }
    ]
  },
  {
    title: "Dragon Ball",
    imagePlaceholder: "/images/dragonball-z.jpg",
    questions: [
      {
        question: "Who is the main character of Dragon Ball?",
        options: ["Goku", "Vegeta", "Gohan", "Piccolo"],
        answer: 0,
      },
      {
        question: "What planet is Goku from?",
        options: ["Planet Vegeta", "Planet Earth", "Planet Namek", "Planet Sadala"],
        answer: 0,
      },
      {
        question: "What do you collect to summon Shenron?",
        options: ["Dragon Balls", "Zeni", "Senzu Beans", "Capsules"],
        answer: 0,
      },
      {
        question: "Who is Goku's wife?",
        options: ["Chi-Chi", "Bulma", "Videl", "Android 18"],
        answer: 0,
      },
      {
        question: "Who is Goku's best friend?",
        options: ["Krillin", "Vegeta", "Piccolo", "Gohan"],
        answer: 0,
      },
      {
        question: "What does Vegeta call Goku?",
        options: ["Kakarot", "Goku", "Saiyan", "Warrior"],
        answer: 0,
      },
      {
        question: "Who is Goku's first son?",
        options: ["Gohan", "Goten", "Goku Jr.", "Pan"],
        answer: 0,
      },
      {
        question: "What transformation turns hair golden?",
        options: ["Super Saiyan", "Ultra Instinct", "Kaioken", "Fusion"],
        answer: 0,
      },
      {
        question: "Who trained Goku as a child?",
        options: ["Master Roshi", "Kami", "King Kai", "Whis"],
        answer: 0,
      },
      {
        question: "Who is Vegeta's father?",
        options: ["King Vegeta", "King Cold", "King Kai", "King Yemma"],
        answer: 0,
      },
      {
        question: "Who destroys Planet Vegeta?",
        options: ["Frieza", "Cell", "Majin Buu", "Beerus"],
        answer: 0,
      },
      {
        question: "What fusion creates Vegito?",
        options: ["Goku + Vegeta", "Goku + Gohan", "Gohan + Goten", "Trunks + Goten"],
        answer: 0,
      },
      {
        question: "What fusion creates Gogeta?",
        options: ["Goku + Vegeta", "Goku + Gohan", "Gohan + Goten", "Trunks + Goten"],
        answer: 0,
      },
      {
        question: "Who is Goku's rival from childhood?",
        options: ["Vegeta", "Piccolo", "Tien", "Yamcha"],
        answer: 0,
      },
      {
        question: "What item restores health instantly?",
        options: ["Senzu Bean", "Dragon Ball", "Capsule", "Zeni"],
        answer: 0,
      },
      {
        question: "What is Goku's Japanese name?",
        options: ["Son Goku", "Kakarot", "Goku", "Son"],
        answer: 0,
      },
      {
        question: "Who is the God of Destruction?",
        options: ["Beerus", "Whis", "Zeno", "Grand Minister"],
        answer: 0,
      },
      {
        question: "What is Frieza's final form color?",
        options: ["Golden", "White", "Black", "Purple"],
        answer: 0,
      },
      {
        question: "What is the name of Goku's last form in Super?",
        options: ["Ultra Instinct", "Super Saiyan Blue", "Super Saiyan God", "Kaioken"],
        answer: 0,
      },
      {
        question: "What is the technique Goku uses to teleport?",
        options: ["Instant Transmission", "Kamehameha", "Spirit Bomb", "Fusion"],
        answer: 0,
      }
    ]
  },
  {
    title: "Naruto",
    imagePlaceholder: "/images/naruto.jpg",
    questions: [
      {
        question: "Who is the main character of Naruto?",
        options: ["Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno", "Kakashi Hatake"],
        answer: 0,
      },
      {
        question: "What is sealed inside Naruto?",
        options: ["Nine-Tailed Fox (Kurama)", "Eight-Tailed Octopus", "Seven-Tailed Beetle", "Six-Tailed Slug"],
        answer: 0,
      },
      {
        question: "Who is Naruto's rival?",
        options: ["Sasuke Uchiha", "Neji Hyuga", "Shikamaru Nara", "Kiba Inuzuka"],
        answer: 0,
      },
      {
        question: "Who is Naruto's sensei?",
        options: ["Kakashi Hatake", "Jiraiya", "Iruka Umino", "Asuma Sarutobi"],
        answer: 0,
      },
      {
        question: "Who is the copy ninja?",
        options: ["Kakashi Hatake", "Jiraiya", "Orochimaru", "Tsunade"],
        answer: 0,
      },
      {
        question: "What village is Naruto from?",
        options: ["Hidden Leaf Village", "Hidden Sand Village", "Hidden Mist Village", "Hidden Cloud Village"],
        answer: 0,
      },
      {
        question: "What is Naruto's dream?",
        options: ["To become Hokage", "To become the strongest ninja", "To protect his friends", "To find his parents"],
        answer: 0,
      },
      {
        question: "Who is Naruto's best friend?",
        options: ["Sasuke Uchiha", "Shikamaru Nara", "Kiba Inuzuka", "Choji Akimichi"],
        answer: 0,
      },
      {
        question: "Who is Naruto's wife?",
        options: ["Hinata Hyuga", "Sakura Haruno", "Ino Yamanaka", "Temari"],
        answer: 0,
      },
      {
        question: "Who is the leader of the Akatsuki?",
        options: ["Pain/Nagato", "Itachi Uchiha", "Obito Uchiha", "Madara Uchiha"],
        answer: 0,
      },
      {
        question: "What eye technique does Sasuke have?",
        options: ["Sharingan", "Byakugan", "Rinnegan", "Tenseigan"],
        answer: 0,
      },
      {
        question: "What clan is known for the Byakugan?",
        options: ["Hyuga Clan", "Uchiha Clan", "Senju Clan", "Uzumaki Clan"],
        answer: 0,
      },
      {
        question: "What is Sakura's specialty?",
        options: ["Medical ninjutsu", "Genjutsu", "Taijutsu", "Ninjutsu"],
        answer: 0,
      },
      {
        question: "Who trained Jiraiya?",
        options: ["Hiruzen Sarutobi", "Minato Namikaze", "Tsunade", "Orochimaru"],
        answer: 0,
      },
      {
        question: "Who trained Naruto after Jiraiya?",
        options: ["Kakashi Hatake", "Yamato", "Killer B", "Kushina Uzumaki"],
        answer: 0,
      },
      {
        question: "What is the name of Naruto's father?",
        options: ["Minato Namikaze", "Jiraiya", "Kakashi Hatake", "Hiruzen Sarutobi"],
        answer: 0,
      },
      {
        question: "What is the name of Naruto's mother?",
        options: ["Kushina Uzumaki", "Mikoto Uchiha", "Tsunade", "Sakura Haruno"],
        answer: 0,
      },
      {
        question: "What is the name of Naruto's son?",
        options: ["Boruto Uzumaki", "Himawari Uzumaki", "Kawaki", "Mitsuki"],
        answer: 0,
      },
      {
        question: "What beast is inside Gaara?",
        options: ["One-Tailed Shukaku", "Two-Tailed Matatabi", "Three-Tailed Isobu", "Four-Tailed Son Goku"],
        answer: 0,
      },
      {
        question: "What technique makes clones?",
        options: ["Shadow Clone Jutsu", "Transformation Jutsu", "Substitution Jutsu", "Summoning Jutsu"],
        answer: 0,
      }
    ]
  },
  {
    title: "Pokémon",
    imagePlaceholder: "/images/pokemon.jpg",
    questions: [
      {
        question: "Who is the main character of Pokémon?",
        options: ["Ash Ketchum", "Gary Oak", "Misty", "Brock"],
        answer: 0,
      },
      {
        question: "What is Pikachu's type?",
        options: ["Electric", "Fire", "Water", "Grass"],
        answer: 0,
      },
      {
        question: "What color are Poké Balls?",
        options: ["Red and white", "Blue and white", "Green and white", "Yellow and white"],
        answer: 0,
      },
      {
        question: "What is Ash's first Pokémon?",
        options: ["Pikachu", "Charmander", "Squirtle", "Bulbasaur"],
        answer: 0,
      },
      {
        question: "Who is Ash's first rival?",
        options: ["Gary Oak", "Paul", "Trip", "Barry"],
        answer: 0,
      },
      {
        question: "Who is the first Gym Leader Ash faces?",
        options: ["Brock", "Misty", "Lt. Surge", "Erika"],
        answer: 0,
      },
      {
        question: "What region does Ash start in?",
        options: ["Kanto", "Johto", "Hoenn", "Sinnoh"],
        answer: 0,
      },
      {
        question: "What is the name of the nurse in Pokémon Centers?",
        options: ["Nurse Joy", "Nurse Jenny", "Nurse May", "Nurse Dawn"],
        answer: 0,
      },
      {
        question: "What is the name of the police officer in Pokémon?",
        options: ["Officer Jenny", "Officer Joy", "Officer May", "Officer Dawn"],
        answer: 0,
      },
      {
        question: "What are the villains called?",
        options: ["Team Rocket", "Team Magma", "Team Aqua", "Team Galactic"],
        answer: 0,
      },
      {
        question: "Who are the members of Team Rocket?",
        options: ["Jessie, James, and Meowth", "Giovanni, Jessie, and James", "Meowth, Wobbuffet, and Giovanni", "Jessie, James, and Giovanni"],
        answer: 0,
      },
      {
        question: "What does Misty specialize in?",
        options: ["Water Pokémon", "Fire Pokémon", "Grass Pokémon", "Electric Pokémon"],
        answer: 0,
      },
      {
        question: "What does Brock specialize in?",
        options: ["Rock Pokémon", "Ground Pokémon", "Steel Pokémon", "Fighting Pokémon"],
        answer: 0,
      },
      {
        question: "What is the name of the Professor in Kanto?",
        options: ["Professor Oak", "Professor Elm", "Professor Birch", "Professor Rowan"],
        answer: 0,
      },
      {
        question: "What Pokémon is known as the 'fire lizard'?",
        options: ["Charmander", "Charmeleon", "Charizard", "Vulpix"],
        answer: 0,
      },
      {
        question: "What Pokémon evolves into Raichu?",
        options: ["Pichu", "Pikachu", "Raichu", "Plusle"],
        answer: 1,
      },
      {
        question: "What legendary bird is seen in episode 1?",
        options: ["Ho-Oh", "Lugia", "Articuno", "Zapdos"],
        answer: 0,
      },
      {
        question: "What type of Pokémon is Bulbasaur?",
        options: ["Grass/Poison", "Grass", "Poison", "Normal"],
        answer: 0,
      },
      {
        question: "What Pokémon is known as the 'sleeping Pokémon'?",
        options: ["Snorlax", "Drowzee", "Hypno", "Jigglypuff"],
        answer: 0,
      },
      {
        question: "What device records Pokémon data?",
        options: ["Pokédex", "Poké Ball", "Poké Flute", "Poké Doll"],
        answer: 0,
      }
    ]
  },
  {
    title: "Fullmetal Alchemist: Brotherhood",
    imagePlaceholder: "/images/fullmetal-alchemist-brotherhood.jpg",
    questions: [
      {
        question: "Who are the two main brothers?",
        options: ["Edward and Alphonse Elric", "Roy and Riza", "Winry and Pinako", "Maes and Gracia"],
        answer: 0,
      },
      {
        question: "What do they lose in the failed transmutation?",
        options: ["Edward's arm and leg, Alphonse's body", "Edward's leg, Alphonse's arm", "Both lose their arms", "Both lose their legs"],
        answer: 0,
      },
      {
        question: "What is Edward's automail arm made of?",
        options: ["Steel", "Iron", "Aluminum", "Titanium"],
        answer: 0,
      },
      {
        question: "Who is Alphonse's soul bound to?",
        options: ["A suit of armor", "A doll", "A book", "A ring"],
        answer: 0,
      },
      {
        question: "What is the law of equivalent exchange?",
        options: ["To obtain, something of equal value must be lost", "To obtain, something of greater value must be lost", "To obtain, something of lesser value must be lost", "To obtain, nothing needs to be lost"],
        answer: 0,
      },
      {
        question: "Who is the main villain?",
        options: ["Father", "Dante", "Envy", "Pride"],
        answer: 0,
      },
      {
        question: "Who is the Flame Alchemist?",
        options: ["Roy Mustang", "Riza Hawkeye", "Maes Hughes", "Jean Havoc"],
        answer: 0,
      },
      {
        question: "Who is the Strong Arm Alchemist?",
        options: ["Alex Louis Armstrong", "Roy Mustang", "Maes Hughes", "Jean Havoc"],
        answer: 0,
      },
      {
        question: "Who is Edward's childhood friend?",
        options: ["Winry Rockbell", "Riza Hawkeye", "Gracia Hughes", "Maria Ross"],
        answer: 0,
      },
      {
        question: "Who is the military leader of Amestris?",
        options: ["King Bradley", "Roy Mustang", "Maes Hughes", "Jean Havoc"],
        answer: 0,
      },
      {
        question: "What do the Homunculi represent?",
        options: ["The seven deadly sins", "The seven virtues", "The seven elements", "The seven days"],
        answer: 0,
      },
      {
        question: "Who is the Homunculus of Greed?",
        options: ["Greed", "Envy", "Pride", "Lust"],
        answer: 0,
      },
      {
        question: "What is the Philosopher's Stone used for?",
        options: ["To perform alchemy without equivalent exchange", "To create gold", "To heal wounds", "To extend life"],
        answer: 0,
      },
      {
        question: "Who is the Homunculus of Lust?",
        options: ["Lust", "Envy", "Pride", "Greed"],
        answer: 0,
      },
      {
        question: "What is the name of Winry's profession?",
        options: ["Automail engineer", "Doctor", "Alchemist", "Soldier"],
        answer: 0,
      },
      {
        question: "Who is the Homunculus of Wrath?",
        options: ["King Bradley", "Envy", "Pride", "Greed"],
        answer: 0,
      },
      {
        question: "What creature guards the Truth?",
        options: ["The Truth", "The Gate", "The Door", "The Void"],
        answer: 0,
      },
      {
        question: "What symbol do alchemists use?",
        options: ["Transmutation circle", "Pentagram", "Hexagram", "Circle"],
        answer: 0,
      },
      {
        question: "Who is the Homunculus of Envy?",
        options: ["Envy", "Lust", "Pride", "Greed"],
        answer: 0,
      },
      {
        question: "What is Alphonse's dream?",
        options: ["To get his body back", "To become a State Alchemist", "To find the Philosopher's Stone", "To learn alchemy"],
        answer: 0,
      }
    ]
  },
  {
    title: "Death Note",
    imagePlaceholder: "/images/death-note.jpg",
    questions: [
      {
        question: "Who finds the Death Note?",
        options: ["Light Yagami", "L", "Misa Amane", "Ryuk"],
        answer: 0,
      },
      {
        question: "Who is the god of death that drops it?",
        options: ["Ryuk", "Rem", "Gelus", "Sidoh"],
        answer: 0,
      },
      {
        question: "What is Light's last name?",
        options: ["Yagami", "Turner", "Lawliet", "Amane"],
        answer: 0,
      },
      {
        question: "Who is the detective chasing Kira?",
        options: ["L", "Light Yagami", "Misa Amane", "Ryuk"],
        answer: 0,
      },
      {
        question: "What fruit does Ryuk love?",
        options: ["Apples", "Oranges", "Bananas", "Grapes"],
        answer: 0,
      },
      {
        question: "What is the rule of the Death Note?",
        options: ["The human whose name is written in this note shall die", "The human whose face is seen in this note shall die", "The human whose address is written in this note shall die", "The human whose age is written in this note shall die"],
        answer: 0,
      },
      {
        question: "What must you know to kill someone?",
        options: ["Their face and name", "Their name only", "Their face only", "Their address"],
        answer: 0,
      },
      {
        question: "Who is Light's girlfriend?",
        options: ["Misa Amane", "Sayu Yagami", "Naomi Misora", "Kiyomi Takada"],
        answer: 0,
      },
      {
        question: "What is Misa's profession?",
        options: ["Model/Actress", "Student", "Detective", "Police officer"],
        answer: 0,
      },
      {
        question: "What deal gives a person Shinigami eyes?",
        options: ["Trading half their remaining lifespan", "Trading their soul", "Trading their memories", "Trading their family"],
        answer: 0,
      },
      {
        question: "What is L's favorite food?",
        options: ["Sweets", "Pizza", "Sushi", "Ramen"],
        answer: 0,
      },
      {
        question: "What letter does L use as his name?",
        options: ["L", "K", "M", "N"],
        answer: 0,
      },
      {
        question: "Who replaces L after his death?",
        options: ["Near and Mello", "Light Yagami", "Ryuk", "Misa Amane"],
        answer: 0,
      },
      {
        question: "What is the name of L's successor with white hair?",
        options: ["Near", "Mello", "Light", "Ryuk"],
        answer: 0,
      },
      {
        question: "What color are Ryuk's eyes?",
        options: ["Yellow", "Red", "Blue", "Green"],
        answer: 0,
      },
      {
        question: "What does Kira mean in Japanese?",
        options: ["Killer", "God", "Death", "Light"],
        answer: 0,
      },
      {
        question: "What is the symbol on L's computer?",
        options: ["L", "K", "M", "N"],
        answer: 0,
      },
      {
        question: "Who is Light's father?",
        options: ["Soichiro Yagami", "L", "Ryuk", "Watari"],
        answer: 0,
      },
      {
        question: "What task force hunts Kira?",
        options: ["The Kira Task Force", "The L Task Force", "The Death Note Task Force", "The Light Task Force"],
        answer: 0,
      },
      {
        question: "What happens to Light at the end?",
        options: ["He dies", "He goes to prison", "He escapes", "He becomes L"],
        answer: 0,
      }
    ]
  },
  {
    title: "Cowboy Bebop",
    imagePlaceholder: "/images/cowboy-bebop.jpg",
    questions: [
      {
        question: "Who is the main character?",
        options: ["Spike Spiegel", "Jet Black", "Faye Valentine", "Edward"],
        answer: 0,
      },
      {
        question: "What is the name of the spaceship?",
        options: ["Bebop", "Red Tail", "Hammer Head", "Swordfish"],
        answer: 0,
      },
      {
        question: "Who is Spike's partner?",
        options: ["Jet Black", "Faye Valentine", "Edward", "Ein"],
        answer: 0,
      },
      {
        question: "Who is the female bounty hunter on the crew?",
        options: ["Faye Valentine", "Julia", "Edward", "Ein"],
        answer: 0,
      },
      {
        question: "What is the name of the corgi dog?",
        options: ["Ein", "Einstein", "Ed", "Jet"],
        answer: 0,
      },
      {
        question: "What is Jet's profession before bounty hunting?",
        options: ["Police officer", "Bounty hunter", "Pilot", "Mechanic"],
        answer: 0,
      },
      {
        question: "Who is the hacker of the crew?",
        options: ["Edward", "Faye", "Spike", "Jet"],
        answer: 0,
      },
      {
        question: "What is Spike's fighting style?",
        options: ["Jeet Kune Do", "Kung Fu", "Karate", "Judo"],
        answer: 0,
      },
      {
        question: "What is the main job of the crew?",
        options: ["Bounty hunting", "Space exploration", "Trading", "Mining"],
        answer: 0,
      },
      {
        question: "Who is Spike's old enemy?",
        options: ["Vicious", "Julia", "Jet", "Faye"],
        answer: 0,
      },
      {
        question: "What is Faye's full name?",
        options: ["Faye Valentine", "Faye Spiegel", "Faye Black", "Faye Ein"],
        answer: 0,
      },
      {
        question: "Who is Julia?",
        options: ["Spike's former lover", "Spike's sister", "Spike's mother", "Spike's daughter"],
        answer: 0,
      },
      {
        question: "What color is Spike's suit?",
        options: ["Blue", "Red", "Black", "Green"],
        answer: 0,
      },
      {
        question: "Who is the leader of the Red Dragon syndicate?",
        options: ["Vicious", "Spike", "Jet", "Faye"],
        answer: 0,
      },
      {
        question: "What type of music is the opening?",
        options: ["Jazz", "Rock", "Pop", "Classical"],
        answer: 0,
      },
      {
        question: "What year is the anime set in?",
        options: ["2071", "2070", "2072", "2073"],
        answer: 0,
      },
      {
        question: "What planet is Jet originally from?",
        options: ["Ganymede", "Mars", "Venus", "Earth"],
        answer: 0,
      },
      {
        question: "Who created Cowboy Bebop?",
        options: ["Shinichiro Watanabe", "Hayao Miyazaki", "Mamoru Oshii", "Katsuhiro Otomo"],
        answer: 0,
      },
      {
        question: "What is the title of the last episode?",
        options: ["The Real Folk Blues", "Jupiter Jazz", "Speak Like a Child", "Brain Scratch"],
        answer: 0,
      },
      {
        question: "What phrase closes each episode?",
        options: ["See you space cowboy", "Goodbye", "The end", "Farewell"],
        answer: 0,
      }
    ]
  },
  {
    title: "Neon Genesis Evangelion",
    imagePlaceholder: "/images/neon-genesis-evan.jpg",
    questions: [
      {
        question: "Who is the main character?",
        options: ["Shinji Ikari", "Rei Ayanami", "Asuka Langley", "Kaworu Nagisa"],
        answer: 0,
      },
      {
        question: "What are the giant mechs called?",
        options: ["Evangelions", "Gundams", "Zoids", "Patlabors"],
        answer: 0,
      },
      {
        question: "Who pilots Eva Unit 01?",
        options: ["Shinji Ikari", "Rei Ayanami", "Asuka Langley", "Kaworu Nagisa"],
        answer: 0,
      },
      {
        question: "Who is Shinji's father?",
        options: ["Gendo Ikari", "Kozo Fuyutsuki", "Ryoji Kaji", "Misato Katsuragi"],
        answer: 0,
      },
      {
        question: "Who is the blue-haired pilot?",
        options: ["Rei Ayanami", "Asuka Langley", "Mari Makinami", "Hikari Horaki"],
        answer: 0,
      },
      {
        question: "Who is the red-haired pilot?",
        options: ["Asuka Langley", "Rei Ayanami", "Mari Makinami", "Hikari Horaki"],
        answer: 0,
      },
      {
        question: "Who is Shinji's teacher?",
        options: ["Misato Katsuragi", "Ritsuko Akagi", "Ryoji Kaji", "Gendo Ikari"],
        answer: 0,
      },
      {
        question: "What organization runs the Evas?",
        options: ["NERV", "SEELE", "UN", "JSSDF"],
        answer: 0,
      },
      {
        question: "What are the enemies called?",
        options: ["Angels", "Demons", "Monsters", "Aliens"],
        answer: 0,
      },
      {
        question: "What is NERV's headquarters shaped like?",
        options: ["Pyramid", "Sphere", "Cube", "Cylinder"],
        answer: 0,
      },
      {
        question: "Who is Misato Katsuragi?",
        options: ["NERV operations director", "Eva pilot", "Scientist", "Teacher"],
        answer: 0,
      },
      {
        question: "What is Shinji's famous catchphrase?",
        options: ["I mustn't run away", "I can do it", "I give up", "I'm scared"],
        answer: 0,
      },
      {
        question: "What does EVA stand for?",
        options: ["Evangelion", "Evolution", "Evasion", "Evaluation"],
        answer: 0,
      },
      {
        question: "What is Rei Ayanami's clone origin?",
        options: ["Clone of Yui Ikari", "Clone of Asuka", "Clone of Misato", "Clone of Ritsuko"],
        answer: 0,
      },
      {
        question: "Who is Kaworu Nagisa?",
        options: ["The 17th Angel", "A NERV pilot", "A scientist", "A teacher"],
        answer: 0,
      },
      {
        question: "What is the Third Impact?",
        options: ["Human instrumentality", "Angel invasion", "Eva destruction", "World war"],
        answer: 0,
      },
      {
        question: "What year was Evangelion first released?",
        options: ["1995", "1994", "1996", "1997"],
        answer: 0,
      },
      {
        question: "Who directed Evangelion?",
        options: ["Hideaki Anno", "Hayao Miyazaki", "Mamoru Oshii", "Katsuhiro Otomo"],
        answer: 0,
      },
      {
        question: "What song plays at the end of each episode?",
        options: ["Fly Me to the Moon", "A Cruel Angel's Thesis", "Komm, süsser Tod", "Beautiful World"],
        answer: 0,
      },
      {
        question: "What color is Unit 01?",
        options: ["Purple", "Blue", "Red", "Green"],
        answer: 0,
      }
    ]
  },
  {
    title: "My Hero Academia",
    imagePlaceholder: "/images/my-hero-academia.jpg",
    questions: [
      {
        question: "Who is the main character of My Hero Academia?",
        options: ["Izuku Midoriya", "Katsuki Bakugo", "Shoto Todoroki", "All Might"],
        answer: 0,
      },
      {
        question: "What is Deku's real name?",
        options: ["Izuku Midoriya", "Katsuki Bakugo", "Shoto Todoroki", "Tenya Iida"],
        answer: 0,
      },
      {
        question: "What is Deku's dream?",
        options: ["To become the greatest hero", "To become rich", "To become famous", "To become a teacher"],
        answer: 0,
      },
      {
        question: "Who gives Deku his power?",
        options: ["All Might", "Endeavor", "Gran Torino", "Recovery Girl"],
        answer: 0,
      },
      {
        question: "What is Deku's quirk called?",
        options: ["One For All", "All For One", "Explosion", "Half-Cold Half-Hot"],
        answer: 0,
      },
      {
        question: "Who is Deku's childhood friend and rival?",
        options: ["Katsuki Bakugo", "Shoto Todoroki", "Tenya Iida", "Eijiro Kirishima"],
        answer: 0,
      },
      {
        question: "What is Bakugo's quirk?",
        options: ["Explosion", "One For All", "Half-Cold Half-Hot", "Engine"],
        answer: 0,
      },
      {
        question: "What is Todoroki's quirk?",
        options: ["Half-Cold Half-Hot", "Explosion", "One For All", "Engine"],
        answer: 0,
      },
      {
        question: "What school do they attend?",
        options: ["U.A. High School", "Shiketsu High School", "Ketsubutsu Academy", "Seijin High School"],
        answer: 0,
      },
      {
        question: "Who is the principal of U.A. High?",
        options: ["Nezu", "All Might", "Eraser Head", "Present Mic"],
        answer: 0,
      },
      {
        question: "Who is Deku's mentor?",
        options: ["All Might", "Gran Torino", "Eraser Head", "Present Mic"],
        answer: 0,
      },
      {
        question: "Who is the Symbol of Peace?",
        options: ["All Might", "Endeavor", "Hawks", "Best Jeanist"],
        answer: 0,
      },
      {
        question: "Who is the main villain of the League of Villains?",
        options: ["Tomura Shigaraki", "All For One", "Dabi", "Himiko Toga"],
        answer: 0,
      },
      {
        question: "Who has a frog-like quirk?",
        options: ["Tsuyu Asui", "Mina Ashido", "Kyoka Jiro", "Momo Yaoyorozu"],
        answer: 0,
      },
      {
        question: "Who has a gravity quirk?",
        options: ["Ochaco Uraraka", "Tsuyu Asui", "Mina Ashido", "Kyoka Jiro"],
        answer: 0,
      },
      {
        question: "Who is the teacher with an erasing quirk?",
        options: ["Eraser Head", "Present Mic", "Cementoss", "Snipe"],
        answer: 0,
      },
      {
        question: "Who is the Number Two Hero after All Might?",
        options: ["Endeavor", "Hawks", "Best Jeanist", "Edgeshot"],
        answer: 0,
      },
      {
        question: "What hero uses engines on his legs?",
        options: ["Tenya Iida", "Shoto Todoroki", "Eijiro Kirishima", "Denki Kaminari"],
        answer: 0,
      },
      {
        question: "What is Ochaco's dream job?",
        options: ["To become a hero to support her family", "To become rich", "To become famous", "To become a teacher"],
        answer: 0,
      },
      {
        question: "What is the name of the sports event at U.A.?",
        options: ["U.A. Sports Festival", "Hero Festival", "Quirk Festival", "Student Festival"],
        answer: 0,
      }
    ]
  },
  {
    title: "Chainsaw Man",
    imagePlaceholder: "/images/chainsaw-man.jpg",
    questions: [
      {
        question: "Who is the main character of Chainsaw Man?",
        options: ["Denji", "Aki Hayakawa", "Power", "Makima"],
        answer: 0,
      },
      {
        question: "What is Denji's pet devil's name?",
        options: ["Pochita", "Power", "Beam", "Kobeni"],
        answer: 0,
      },
      {
        question: "What devil is Pochita?",
        options: ["Chainsaw Devil", "Dog Devil", "Pet Devil", "Friend Devil"],
        answer: 0,
      },
      {
        question: "Who is Denji's partner in Public Safety?",
        options: ["Aki Hayakawa", "Power", "Makima", "Kobeni"],
        answer: 0,
      },
      {
        question: "Who is the woman that recruits Denji?",
        options: ["Makima", "Power", "Kobeni", "Himeno"],
        answer: 0,
      },
      {
        question: "What is Aki's weapon?",
        options: ["Curse Devil", "Fox Devil", "Future Devil", "Kon"],
        answer: 0,
      },
      {
        question: "What is Power's species?",
        options: ["Blood Devil", "Human", "Hybrid", "Angel"],
        answer: 0,
      },
      {
        question: "What is Power obsessed with?",
        options: ["Blood", "Money", "Food", "Power"],
        answer: 0,
      },
      {
        question: "What devil killed Aki's family?",
        options: ["Gun Devil", "Chainsaw Devil", "Blood Devil", "Curse Devil"],
        answer: 0,
      },
      {
        question: "What devil controls fear of guns?",
        options: ["Gun Devil", "Chainsaw Devil", "Blood Devil", "Curse Devil"],
        answer: 0,
      },
      {
        question: "Who is Denji's crush?",
        options: ["Makima", "Power", "Kobeni", "Himeno"],
        answer: 0,
      },
      {
        question: "Who smokes cigarettes in the squad?",
        options: ["Aki Hayakawa", "Denji", "Power", "Kobeni"],
        answer: 0,
      },
      {
        question: "What is Kobeni afraid of?",
        options: ["Everything", "Devils", "Death", "Fighting"],
        answer: 0,
      },
      {
        question: "What is Makima's job?",
        options: ["Public Safety Devil Hunter", "Teacher", "Police Officer", "Doctor"],
        answer: 0,
      },
      {
        question: "What is Denji's dream food?",
        options: ["Bread with jam", "Steak", "Pizza", "Ramen"],
        answer: 0,
      },
      {
        question: "What is Denji's weapon form?",
        options: ["Chainsaw", "Sword", "Gun", "Hammer"],
        answer: 0,
      },
      {
        question: "What part of Denji transforms into a chainsaw?",
        options: ["His head and arms", "His legs", "His chest", "His back"],
        answer: 0,
      },
      {
        question: "What devil controls fear of darkness?",
        options: ["Darkness Devil", "Gun Devil", "Chainsaw Devil", "Blood Devil"],
        answer: 0,
      },
      {
        question: "Who is Beam?",
        options: ["Shark Devil", "Fish Devil", "Water Devil", "Ocean Devil"],
        answer: 0,
      },
      {
        question: "What does Denji wish for in life?",
        options: ["To touch a woman's breasts", "To become rich", "To become famous", "To become strong"],
        answer: 0,
      }
    ]
  },
  {
    title: "Spy × Family",
    imagePlaceholder: "/images/spyx-family.jpg",
    questions: [
      {
        question: "Who is the spy known as Twilight?",
        options: ["Loid Forger", "Yor Forger", "Anya Forger", "Bond Forger"],
        answer: 0,
      },
      {
        question: "What alias does Twilight use?",
        options: ["Loid Forger", "Yor Forger", "Anya Forger", "Bond Forger"],
        answer: 0,
      },
      {
        question: "What is Anya's special ability?",
        options: ["Telepathy", "Super strength", "Invisibility", "Flying"],
        answer: 0,
      },
      {
        question: "What is Yor's secret job?",
        options: ["Assassin", "Spy", "Teacher", "Doctor"],
        answer: 0,
      },
      {
        question: "What is Loid's cover profession?",
        options: ["Psychiatrist", "Teacher", "Doctor", "Lawyer"],
        answer: 0,
      },
      {
        question: "Who is the family's pet?",
        options: ["Bond", "Anya", "Yor", "Loid"],
        answer: 0,
      },
      {
        question: "What is the dog's special ability?",
        options: ["Precognition", "Super strength", "Invisibility", "Flying"],
        answer: 0,
      },
      {
        question: "What school does Anya attend?",
        options: ["Eden Academy", "Westalis Academy", "Ostania Academy", "Peace Academy"],
        answer: 0,
      },
      {
        question: "What is the name of the elite student rank?",
        options: ["Imperial Scholar", "Royal Scholar", "Noble Scholar", "Elite Scholar"],
        answer: 0,
      },
      {
        question: "Who is Damian Desmond's father?",
        options: ["Donovan Desmond", "Loid Forger", "Yuri Briar", "Henry Henderson"],
        answer: 0,
      },
      {
        question: "What is Yor's weapon of choice?",
        options: ["Needles", "Guns", "Swords", "Knives"],
        answer: 0,
      },
      {
        question: "Who suspects Loid's identity?",
        options: ["Yuri Briar", "Yor Forger", "Anya Forger", "Bond Forger"],
        answer: 0,
      },
      {
        question: "Who is Anya's best friend?",
        options: ["Becky Blackbell", "Damian Desmond", "Ewen Egeburg", "Emile Elman"],
        answer: 0,
      },
      {
        question: "What subject is Anya bad at?",
        options: ["Math", "Science", "History", "Literature"],
        answer: 0,
      },
      {
        question: "What subject is Anya good at?",
        options: ["History", "Math", "Science", "Literature"],
        answer: 0,
      },
      {
        question: "Who is Yor's younger brother?",
        options: ["Yuri Briar", "Loid Forger", "Anya Forger", "Bond Forger"],
        answer: 0,
      },
      {
        question: "What is Yuri's profession?",
        options: ["Secret Police", "Spy", "Teacher", "Doctor"],
        answer: 0,
      },
      {
        question: "What animal is featured in Anya's favorite cartoon?",
        options: ["Penguin", "Dog", "Cat", "Bird"],
        answer: 0,
      },
      {
        question: "What country is the story set in?",
        options: ["Ostania", "Westalis", "United States", "Japan"],
        answer: 0,
      },
      {
        question: "What event must Anya attend to help Loid's mission?",
        options: ["Eden Academy interview", "School play", "Sports day", "Graduation ceremony"],
        answer: 0,
      }
    ]
  },
  {
    title: "Haikyu!!",
    imagePlaceholder: "/images/haikyu.jpg",
    questions: [
      {
        question: "Who is the main character of Haikyu!!?",
        options: ["Shoyo Hinata", "Tobio Kageyama", "Daichi Sawamura", "Asahi Azumane"],
        answer: 0,
      },
      {
        question: "What position does Hinata play?",
        options: ["Middle Blocker", "Setter", "Wing Spiker", "Libero"],
        answer: 0,
      },
      {
        question: "Who is Hinata's main rival?",
        options: ["Tobio Kageyama", "Toru Oikawa", "Wakatoshi Ushijima", "Atsumu Miya"],
        answer: 0,
      },
      {
        question: "What is Kageyama's nickname?",
        options: ["King of the Court", "Prince of the Court", "Emperor of the Court", "Lord of the Court"],
        answer: 0,
      },
      {
        question: "What is Hinata's dream team?",
        options: ["Karasuno", "Nekoma", "Aoba Johsai", "Shiratorizawa"],
        answer: 0,
      },
      {
        question: "What school does Hinata attend?",
        options: ["Karasuno High", "Nekoma High", "Aoba Johsai High", "Shiratorizawa Academy"],
        answer: 0,
      },
      {
        question: "Who is the captain of Karasuno?",
        options: ["Daichi Sawamura", "Asahi Azumane", "Tobio Kageyama", "Shoyo Hinata"],
        answer: 0,
      },
      {
        question: "What animal is Karasuno's mascot?",
        options: ["Crow", "Eagle", "Hawk", "Raven"],
        answer: 0,
      },
      {
        question: "Who is Karasuno's libero?",
        options: ["Yu Nishinoya", "Daichi Sawamura", "Asahi Azumane", "Tobio Kageyama"],
        answer: 0,
      },
      {
        question: "Who is the ace of Karasuno?",
        options: ["Asahi Azumane", "Daichi Sawamura", "Tobio Kageyama", "Shoyo Hinata"],
        answer: 0,
      },
      {
        question: "Who is Karasuno's coach?",
        options: ["Keishin Ukai", "Ittetsu Takeda", "Kiyoko Shimizu", "Hitoka Yachi"],
        answer: 0,
      },
      {
        question: "What does Hinata lack in height?",
        options: ["Height", "Strength", "Speed", "Technique"],
        answer: 0,
      },
      {
        question: "What makes Hinata strong despite his height?",
        options: ["Jumping ability", "Strength", "Speed", "Technique"],
        answer: 0,
      },
      {
        question: "Who is Nekoma's captain?",
        options: ["Tetsuro Kuroo", "Kenma Kozume", "Yaku Morisuke", "Taketora Yamamoto"],
        answer: 0,
      },
      {
        question: "What is Nekoma's team animal?",
        options: ["Cat", "Crow", "Eagle", "Hawk"],
        answer: 0,
      },
      {
        question: "Who is Fukurodani's ace?",
        options: ["Kotaro Bokuto", "Keiji Akaashi", "Tetsuro Kuroo", "Kenma Kozume"],
        answer: 0,
      },
      {
        question: "What does Oikawa play as?",
        options: ["Setter", "Wing Spiker", "Middle Blocker", "Libero"],
        answer: 0,
      },
      {
        question: "What tournament do the teams aim for?",
        options: ["Spring High Nationals", "Summer Interhigh", "Fall Tournament", "Winter Cup"],
        answer: 0,
      },
      {
        question: "What is Hinata's jersey number?",
        options: ["10", "9", "11", "12"],
        answer: 0,
      },
      {
        question: "What is Kageyama's jersey number?",
        options: ["9", "10", "11", "12"],
        answer: 0,
      }
    ]
  },
  {
    title: "Cyberpunk: Edgerunners",
    imagePlaceholder: "/images/cyberpunk.jpg",
    questions: [
      {
        question: "Who is the main character of Edgerunners?",
        options: ["David Martinez", "Lucy", "Maine", "Rebecca"],
        answer: 0,
      },
      {
        question: "What city is the story set in?",
        options: ["Night City", "Los Angeles", "Tokyo", "New York"],
        answer: 0,
      },
      {
        question: "What is David's mother's job?",
        options: ["EMT", "Teacher", "Police Officer", "Doctor"],
        answer: 0,
      },
      {
        question: "What school does David attend at first?",
        options: ["Arasaka Academy", "Night City University", "Corpo School", "Public School"],
        answer: 0,
      },
      {
        question: "What cyberware does David install?",
        options: ["Sandevistan", "Mantis Blades", "Gorilla Arms", "Cyberdeck"],
        answer: 0,
      },
      {
        question: "Who is David's love interest?",
        options: ["Lucy", "Rebecca", "Kiwi", "Falco"],
        answer: 0,
      },
      {
        question: "What is Lucy's specialty?",
        options: ["Netrunning", "Combat", "Driving", "Hacking"],
        answer: 0,
      },
      {
        question: "Who is the leader of the crew?",
        options: ["Maine", "David", "Lucy", "Rebecca"],
        answer: 0,
      },
      {
        question: "Who is the large, muscle-bound mercenary?",
        options: ["Maine", "David", "Falco", "Pilar"],
        answer: 0,
      },
      {
        question: "What is Kiwi's specialty?",
        options: ["Netrunning", "Combat", "Driving", "Hacking"],
        answer: 0,
      },
      {
        question: "What happens when someone overuses cyberware?",
        options: ["Cyberpsychosis", "Death", "Coma", "Amnesia"],
        answer: 0,
      },
      {
        question: "What corporation controls the city?",
        options: ["Arasaka", "Militech", "Kang Tao", "Biotechnica"],
        answer: 0,
      },
      {
        question: "What is the name of the giant company building?",
        options: ["Arasaka Tower", "Militech Tower", "Night Corp Tower", "Biotechnica Tower"],
        answer: 0,
      },
      {
        question: "What drug helps counter cyberpsychosis?",
        options: ["Immunosuppressants", "Painkillers", "Stimulants", "Sedatives"],
        answer: 0,
      },
      {
        question: "What weapon does Maine use?",
        options: ["Gorilla Arms", "Mantis Blades", "Sandevistan", "Cyberdeck"],
        answer: 0,
      },
      {
        question: "What color is Lucy's hair?",
        options: ["White", "Black", "Red", "Blue"],
        answer: 0,
      },
      {
        question: "What does David want to buy for his mom?",
        options: ["A car", "A house", "A vacation", "Medical treatment"],
        answer: 0,
      },
      {
        question: "What is Rebecca's weapon of choice?",
        options: ["Shotgun", "Pistol", "Rifle", "Sword"],
        answer: 0,
      },
      {
        question: "What does Falco do in the team?",
        options: ["Driver", "Fighter", "Hacker", "Medic"],
        answer: 0,
      },
      {
        question: "What happens to David at the end?",
        options: ["He dies", "He escapes", "He becomes a legend", "He goes to prison"],
        answer: 0,
      }
    ]
  },
  {
    title: "Hunter × Hunter",
    imagePlaceholder: "/images/hunter-x-hunter.jpg",
    questions: [
      {
        question: "Who is the main character of Hunter × Hunter?",
        options: ["Gon Freecss", "Killua Zoldyck", "Kurapika", "Leorio"],
        answer: 0,
      },
      {
        question: "What is Gon's father's name?",
        options: ["Ging Freecss", "Mito Freecss", "Kite", "Netero"],
        answer: 0,
      },
      {
        question: "What exam does Gon take?",
        options: ["Hunter Exam", "Ninja Exam", "Wizard Exam", "Warrior Exam"],
        answer: 0,
      },
      {
        question: "Who is Gon's best friend?",
        options: ["Killua Zoldyck", "Kurapika", "Leorio", "Hisoka"],
        answer: 0,
      },
      {
        question: "Who is the assassin friend of Gon?",
        options: ["Killua Zoldyck", "Kurapika", "Leorio", "Hisoka"],
        answer: 0,
      },
      {
        question: "What weapon does Kurapika use?",
        options: ["Chains", "Sword", "Gun", "Bow"],
        answer: 0,
      },
      {
        question: "What clan is Kurapika from?",
        options: ["Kurta Clan", "Zoldyck Clan", "Freecss Clan", "Phantom Clan"],
        answer: 0,
      },
      {
        question: "What color are Kurapika's eyes when angry?",
        options: ["Red", "Blue", "Green", "Purple"],
        answer: 0,
      },
      {
        question: "Who is Leorio's dream profession?",
        options: ["Doctor", "Hunter", "Lawyer", "Teacher"],
        answer: 0,
      },
      {
        question: "Who is the main villain in the Phantom Troupe arc?",
        options: ["Chrollo Lucilfer", "Hisoka", "Illumi", "Feitan"],
        answer: 0,
      },
      {
        question: "Who is the leader of the Phantom Troupe?",
        options: ["Chrollo Lucilfer", "Hisoka", "Illumi", "Feitan"],
        answer: 0,
      },
      {
        question: "What number is Hisoka in the Hunter Exam?",
        options: ["44", "43", "45", "46"],
        answer: 0,
      },
      {
        question: "What does Hisoka fight with?",
        options: ["Bungee Gum", "Cards", "Sword", "Gun"],
        answer: 0,
      },
      {
        question: "What kind of animal is Killua's pet?",
        options: ["Cat", "Dog", "Bird", "Fish"],
        answer: 0,
      },
      {
        question: "What is the name of Gon's aunt?",
        options: ["Mito Freecss", "Ging Freecss", "Kite", "Netero"],
        answer: 0,
      },
      {
        question: "What is Killua's brother's name?",
        options: ["Illumi Zoldyck", "Milluki Zoldyck", "Alluka Zoldyck", "Kalluto Zoldyck"],
        answer: 0,
      },
      {
        question: "What is the currency used in the world?",
        options: ["Jenny", "Dollar", "Yen", "Euro"],
        answer: 0,
      },
      {
        question: "What is the exam called to become a Hunter?",
        options: ["Hunter Exam", "Ninja Exam", "Wizard Exam", "Warrior Exam"],
        answer: 0,
      },
      {
        question: "What island is Gon from?",
        options: ["Whale Island", "Dragon Island", "Bird Island", "Fish Island"],
        answer: 0,
      },
      {
        question: "What sport do Gon and Killua play in Greed Island?",
        options: ["Dodgeball", "Soccer", "Basketball", "Baseball"],
        answer: 0,
      }
    ]
  },
  {
    title: "Gintama",
    imagePlaceholder: "/images/gintama.jpg",
    questions: [
      {
        question: "Who is the main character of Gintama?",
        options: ["Gintoki Sakata", "Shinpachi Shimura", "Kagura", "Toshiro Hijikata"],
        answer: 0,
      },
      {
        question: "What weapon does Gintoki use?",
        options: ["Wooden Sword", "Real Sword", "Gun", "Spear"],
        answer: 0,
      },
      {
        question: "What is the name of Gintoki's silver hair style?",
        options: ["Silver Hair", "Natural Perm", "Afro", "Spiky"],
        answer: 0,
      },
      {
        question: "Who is Gintoki's female friend and fighter?",
        options: ["Kagura", "Shinpachi Shimura", "Toshiro Hijikata", "Sogo Okita"],
        answer: 0,
      },
      {
        question: "What alien race does Kagura belong to?",
        options: ["Yato", "Amanto", "Human", "Robot"],
        answer: 0,
      },
      {
        question: "What pet does Kagura have?",
        options: ["Sadaharu", "Cat", "Bird", "Fish"],
        answer: 0,
      },
      {
        question: "Who is the samurai with glasses in Gintama?",
        options: ["Shinpachi Shimura", "Gintoki Sakata", "Kagura", "Toshiro Hijikata"],
        answer: 0,
      },
      {
        question: "What is the group they run together called?",
        options: ["Yorozuya", "Shinsengumi", "Kabukicho", "Edo"],
        answer: 0,
      },
      {
        question: "What food is Gintoki addicted to?",
        options: ["Strawberry Milk", "Coffee", "Tea", "Sake"],
        answer: 0,
      },
      {
        question: "What is Shinpachi's main weapon?",
        options: ["Glasses", "Sword", "Gun", "Spear"],
        answer: 0,
      },
      {
        question: "What is Gintoki's favorite sweet?",
        options: ["Strawberry Milk", "Chocolate", "Candy", "Ice Cream"],
        answer: 0,
      },
      {
        question: "Who is the leader of the Shinsengumi?",
        options: ["Isao Kondou", "Toshiro Hijikata", "Sogo Okita", "Hajime Saito"],
        answer: 0,
      },
      {
        question: "Who is the vice-commander of the Shinsengumi?",
        options: ["Toshiro Hijikata", "Isao Kondou", "Sogo Okita", "Hajime Saito"],
        answer: 0,
      },
      {
        question: "Who is the sadistic captain with glasses?",
        options: ["Sogo Okita", "Toshiro Hijikata", "Isao Kondou", "Hajime Saito"],
        answer: 0,
      },
      {
        question: "What is the Shinsengumi's mascot animal?",
        options: ["Pig", "Dog", "Cat", "Bird"],
        answer: 0,
      },
      {
        question: "What type of business do Gintoki and friends run?",
        options: ["Odd Jobs", "Restaurant", "Shop", "Dojo"],
        answer: 0,
      },
      {
        question: "What color is Kagura's umbrella?",
        options: ["Red", "Blue", "Green", "Yellow"],
        answer: 0,
      },
      {
        question: "Who is Gintoki's former teacher?",
        options: ["Shoyo Yoshida", "Shinpachi Shimura", "Kagura", "Toshiro Hijikata"],
        answer: 0,
      },
      {
        question: "What is the name of the main antagonist?",
        options: ["Utsuro", "Takasugi", "Kamui", "Hosen"],
        answer: 0,
      },
      {
        question: "What is the motto of Gintoki's group?",
        options: ["We do anything for money", "Justice above all", "Friendship forever", "Power is everything"],
        answer: 0,
      }
    ]
  },
  {
    title: "JoJo's Bizarre Adventure",
    imagePlaceholder: "/images/jojo-bizarre-adventure.jpg",
    questions: [
      {
        question: "Who is the first JoJo?",
        options: ["Jonathan Joestar", "Joseph Joestar", "Jotaro Kujo", "Josuke Higashikata"],
        answer: 0,
      },
      {
        question: "What is Jonathan's family name?",
        options: ["Joestar", "Kujo", "Higashikata", "Giorno"],
        answer: 0,
      },
      {
        question: "Who is Jonathan's rival?",
        options: ["Dio Brando", "Kars", "DIO", "Kira"],
        answer: 0,
      },
      {
        question: "What ancient mask gives vampire powers?",
        options: ["Stone Mask", "Iron Mask", "Gold Mask", "Silver Mask"],
        answer: 0,
      },
      {
        question: "What is Joseph Joestar's favorite catchphrase?",
        options: ["Oh my God!", "Holy shit!", "Amazing!", "Incredible!"],
        answer: 0,
      },
      {
        question: "What is the technique using life energy?",
        options: ["Hamon", "Stand", "Spin", "Ripple"],
        answer: 0,
      },
      {
        question: "Who is the villain in Part 3?",
        options: ["DIO", "Kars", "Kira", "Diavolo"],
        answer: 0,
      },
      {
        question: "What is Dio's famous catchphrase?",
        options: ["WRYYYYYY!", "MUDA MUDA MUDA!", "ZA WARUDO!", "ROAD ROLLER DA!"],
        answer: 0,
      },
      {
        question: "What are the ghost-like powers called?",
        options: ["Stands", "Hamon", "Spin", "Ripple"],
        answer: 0,
      },
      {
        question: "What is Jotaro's Stand?",
        options: ["Star Platinum", "The World", "Crazy Diamond", "Gold Experience"],
        answer: 0,
      },
      {
        question: "What is the ability of Star Platinum?",
        options: ["Time Stop", "Healing", "Creating Life", "Erasing Time"],
        answer: 0,
      },
      {
        question: "Who is Jotaro's daughter?",
        options: ["Jolyne Cujoh", "Josuke Higashikata", "Giorno Giovanna", "Johnny Joestar"],
        answer: 0,
      },
      {
        question: "What is Josuke's Stand?",
        options: ["Crazy Diamond", "Star Platinum", "The World", "Gold Experience"],
        answer: 0,
      },
      {
        question: "What is Giorno's dream?",
        options: ["To become a Gang-Star", "To become rich", "To become famous", "To become a hero"],
        answer: 0,
      },
      {
        question: "What Stand can heal?",
        options: ["Crazy Diamond", "Star Platinum", "The World", "Gold Experience"],
        answer: 0,
      },
      {
        question: "What is Dio's Stand called?",
        options: ["The World", "Star Platinum", "Crazy Diamond", "Gold Experience"],
        answer: 0,
      },
      {
        question: "Who is the creator of JoJo's Bizarre Adventure?",
        options: ["Hirohiko Araki", "Akira Toriyama", "Eiichiro Oda", "Masashi Kishimoto"],
        answer: 0,
      },
      {
        question: "What is the signature art style known for?",
        options: ["Bizarre poses", "Simple designs", "Minimalist", "Abstract"],
        answer: 0,
      },
      {
        question: "What is Jotaro's signature phrase?",
        options: ["Yare yare daze", "Oh my God!", "Amazing!", "Incredible!"],
        answer: 0,
      },
      {
        question: "What is the main theme of JoJo's fights?",
        options: ["Intelligence and strategy", "Raw power", "Speed", "Magic"],
        answer: 0,
      }
    ]
  },
  {
    title: "Violet Evergarden",
    imagePlaceholder: "/images/violet-evergarden.jpg",
    questions: [
      {
        question: "Who is the main character of Violet Evergarden?",
        options: ["Violet Evergarden", "Claudia Hodgins", "Gilbert Bougainvillea", "Cattleya Baudelaire"],
        answer: 0,
      },
      {
        question: "What is Violet's profession?",
        options: ["Auto Memory Doll", "Soldier", "Teacher", "Doctor"],
        answer: 0,
      },
      {
        question: "What does Violet write for people?",
        options: ["Letters", "Books", "Poems", "Stories"],
        answer: 0,
      },
      {
        question: "What war did Violet fight in?",
        options: ["The Great War", "World War I", "World War II", "Civil War"],
        answer: 0,
      },
      {
        question: "What are Violet's arms made of?",
        options: ["Metal prosthetics", "Wood", "Plastic", "Ceramic"],
        answer: 0,
      },
      {
        question: "Who is the man Violet admires most?",
        options: ["Gilbert Bougainvillea", "Claudia Hodgins", "Dietfried Bougainvillea", "Benedict Blue"],
        answer: 0,
      },
      {
        question: "Who is Claudia Hodgins?",
        options: ["Violet's boss", "Violet's father", "Violet's brother", "Violet's teacher"],
        answer: 0,
      },
      {
        question: "What company does Violet work for?",
        options: ["CH Postal Company", "Leidenschaftlich Post", "Auto Memory Doll Company", "Evergarden Company"],
        answer: 0,
      },
      {
        question: "What is an Auto Memory Doll?",
        options: ["Someone who writes letters for others", "A robot", "A typewriter", "A postman"],
        answer: 0,
      },
      {
        question: "What is Violet learning to understand?",
        options: ["Human emotions", "Mathematics", "History", "Science"],
        answer: 0,
      },
      {
        question: "What flower is associated with Violet?",
        options: ["Violet", "Rose", "Lily", "Tulip"],
        answer: 0,
      },
      {
        question: "What is the name of the girl Violet helps write letters for?",
        options: ["Charlotte", "Amy", "Isabella", "Maria"],
        answer: 0,
      },
      {
        question: "Who is Gilbert Bougainvillea?",
        options: ["Violet's major", "Violet's father", "Violet's brother", "Violet's boss"],
        answer: 0,
      },
      {
        question: "What color are Violet's eyes?",
        options: ["Green", "Blue", "Brown", "Purple"],
        answer: 0,
      },
      {
        question: "What is the setting country inspired by?",
        options: ["Post-World War I Europe", "Modern Japan", "Ancient China", "Medieval Europe"],
        answer: 0,
      },
      {
        question: "Who is Cattleya Baudelaire?",
        options: ["Another Auto Memory Doll", "Violet's sister", "Violet's mother", "Violet's teacher"],
        answer: 0,
      },
      {
        question: "What is the emotional theme of the anime?",
        options: ["Understanding love and emotions", "War and peace", "Friendship", "Revenge"],
        answer: 0,
      },
      {
        question: "What is Violet's rank during the war?",
        options: ["Major", "Captain", "Lieutenant", "Sergeant"],
        answer: 0,
      },
      {
        question: "What is the title of the spin-off movie?",
        options: ["Eternity and the Auto Memory Doll", "The Movie", "The Beginning", "The End"],
        answer: 0,
      },
      {
        question: "What is Violet searching for the meaning of?",
        options: ["I love you", "Goodbye", "Hello", "Thank you"],
        answer: 0,
      }
    ]
  }
];

// Image Display Component
const AnimeImage = ({ src, alt, title, isLarge = false }: { src: string; alt: string; title: string; isLarge?: boolean }) => (
  <div className={`${isLarge ? 'w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64' : 'w-32 h-32'} mx-auto mb-4 rounded-xl overflow-hidden border-2 border-gray-600 shadow-lg`}>
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover"
      onError={(e) => {
        // Fallback to placeholder if image fails to load
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        target.nextElementSibling?.classList.remove('hidden');
      }}
    />
    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-gray-300 text-xs text-center p-2 hidden">
      <div>
        <div className="text-2xl mb-1">🎬</div>
        <div className="font-semibold">{title}</div>
      </div>
    </div>
  </div>
);

export default function QuizApp() {
  const [roundQuestions, setRoundQuestions] = useState<Question[]>([]);
  const [roundCategories, setRoundCategories] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showAnimeSelection, setShowAnimeSelection] = useState(false);
  const [selectedAnime, setSelectedAnime] = useState<string[]>([]);

  const startGame = () => {
    setShowAnimeSelection(true);
  };

  const handleAnimeSelection = (animeTitle: string) => {
    if (selectedAnime.includes(animeTitle)) {
      setSelectedAnime(selectedAnime.filter(anime => anime !== animeTitle));
    } else if (selectedAnime.length < 3) {
      setSelectedAnime([...selectedAnime, animeTitle]);
    }
  };

  const confirmAnimeSelection = () => {
    if (selectedAnime.length === 3) {
      // Pick 3 random questions from the selected anime categories
      const allQuestions: { question: Question; category: string; image: string }[] = [];
      
      animeCategories
        .filter(category => selectedAnime.includes(category.title))
        .forEach(category => {
          category.questions.forEach(question => {
            allQuestions.push({
              question,
              category: category.title,
              image: category.imagePlaceholder
            });
          });
        });
      
      const shuffled = allQuestions.sort(() => 0.5 - Math.random());
      const selectedQuestions = shuffled.slice(0, 3);
      
      setRoundQuestions(selectedQuestions.map(q => q.question));
      setRoundCategories(selectedQuestions.map(q => q.category));
      setCurrentIndex(0);
      setScore(0);
      setSelected(null);
      setShowResult(false);
      setShowAnimeSelection(false);
    }
  };

  const resetGame = () => {
    setRoundQuestions([]);
    setRoundCategories([]);
    setCurrentIndex(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
    setShowAnimeSelection(false);
    setSelectedAnime([]);
  };

  const handleAnswer = (i: number) => {
    setSelected(i);
    if (i === roundQuestions[currentIndex].answer) {
      setScore((s) => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIndex + 1 < roundQuestions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header Image */}
      <div className="flex justify-center pt-8 pb-6">
        <img 
          src="/play-no-bg.png" 
          alt="Anime Quiz Header" 
          className="h-48 md:h-56 lg:h-64 w-auto"
        />
      </div>

      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-4xl text-center">
          {!roundQuestions.length && !showAnimeSelection && (
            <div>
              <h1 className="text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Anime Quiz
              </h1>
              <p className="text-xl text-gray-300 mb-8">Test your knowledge across multiple anime series!</p>
              <button
                onClick={startGame}
                className="px-8 py-4 text-3xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Start Quiz
              </button>
            </div>
          )}

          {showAnimeSelection && (
            <div>
              <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Select 3 Anime Shows
              </h1>
              <p className="text-xl text-gray-300 mb-8">Choose 3 anime shows you want to be quizzed on!</p>
              
                             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                 {animeCategories.map((category) => (
                   <button
                     key={category.title}
                     onClick={() => handleAnimeSelection(category.title)}
                     className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                       selectedAnime.includes(category.title)
                         ? 'bg-gradient-to-r from-green-600 to-green-500 border-green-400 scale-105 shadow-lg'
                         : 'bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 hover:from-gray-700 hover:to-gray-600 hover:border-gray-500 hover:scale-105'
                     }`}
                   >
                     <div className="w-20 h-20 mx-auto mb-3 rounded-lg overflow-hidden border border-gray-500">
                       <img 
                         src={category.imagePlaceholder} 
                         alt={category.title} 
                         className="w-full h-full object-cover"
                         onError={(e) => {
                           const target = e.target as HTMLImageElement;
                           target.style.display = 'none';
                           target.nextElementSibling?.classList.remove('hidden');
                         }}
                       />
                       <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-gray-300 text-xs text-center p-1 hidden">
                         <div className="text-lg">🎬</div>
                       </div>
                     </div>
                     <div className="text-lg font-semibold">{category.title}</div>
                     <div className="text-sm text-gray-400 mt-1">{category.questions.length} questions</div>
                   </button>
                 ))}
               </div>

              <div className="mb-8">
                <p className="text-xl text-gray-300 mb-4">
                  Selected: <span className="text-green-400 font-bold">{selectedAnime.length}/3</span>
                </p>
                {selectedAnime.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-2">
                    {selectedAnime.map((anime) => (
                      <span
                        key={anime}
                        className="px-3 py-1 bg-green-600 text-white rounded-full text-sm"
                      >
                        {anime}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={resetGame}
                  className="px-6 py-3 text-xl bg-gradient-to-r from-gray-600 to-gray-500 hover:from-gray-700 hover:to-gray-600 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Back
                </button>
                <button
                  onClick={confirmAnimeSelection}
                  disabled={selectedAnime.length !== 3}
                  className={`px-8 py-3 text-2xl rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    selectedAnime.length === 3
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600'
                      : 'bg-gradient-to-r from-gray-600 to-gray-500 cursor-not-allowed'
                  }`}
                >
                  Start Quiz with Selected Shows
                </button>
              </div>
            </div>
          )}

          {roundQuestions.length > 0 && !showResult && (
            <div>
                             {/* Anime Category Header */}
               <div className="mb-8">
                 <AnimeImage 
                   src={animeCategories.find(cat => cat.title === roundCategories[currentIndex])?.imagePlaceholder || ''} 
                   alt={roundCategories[currentIndex]} 
                   title={roundCategories[currentIndex]} 
                   isLarge={true}
                 />
                 <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-2">
                   {roundCategories[currentIndex]}
                 </h2>
                 <p className="text-gray-400">Question {currentIndex + 1} of {roundQuestions.length}</p>
               </div>

              {/* Question */}
              <h1 className="text-4xl font-bold mb-8 text-gray-100">
                {roundQuestions[currentIndex].question}
              </h1>

              {/* Answer Options */}
              <div className="grid gap-4">
                {roundQuestions[currentIndex].options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className={`p-6 text-2xl rounded-2xl border-4 transition-all duration-200
                      ${
                        selected === null
                          ? "bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 border-gray-600 hover:scale-105 hover:border-gray-500"
                          : i === roundQuestions[currentIndex].answer
                          ? "bg-gradient-to-r from-green-600 to-green-500 border-green-400 scale-105 shadow-lg"
                          : selected === i
                          ? "bg-gradient-to-r from-red-600 to-red-500 border-red-400 scale-105 shadow-lg"
                          : "bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600 opacity-60"
                      }`}
                    disabled={selected !== null}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              {/* Navigation */}
              {selected !== null && (
                <button
                  onClick={nextQuestion}
                  className="mt-8 px-6 py-3 text-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {currentIndex + 1 < roundQuestions.length ? "Next →" : "Finish"}
                </button>
              )}
            </div>
          )}

          {showResult && (
            <div>
              <h1 className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                Quiz Complete!
              </h1>
              <div className="text-6xl font-bold mb-8">
                Score: <span className="text-green-400">{score}</span>/<span className="text-blue-400">3</span>
              </div>
              <div className="text-xl text-gray-300 mb-8">
                {score === 3 && "Perfect! You're an anime expert! 🎉"}
                {score === 2 && "Great job! You know your anime! 👍"}
                {score === 1 && "Not bad! Keep learning! 📚"}
                {score === 0 && "Keep watching anime to improve! 🍿"}
              </div>
                             <div className="flex justify-center">
                 <button
                   onClick={resetGame}
                   className="px-8 py-4 text-2xl bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                 >
                   New Quiz
                 </button>
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
