-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Lun 31 Janvier 2022 à 21:20
-- Version du serveur :  5.7.11
-- Version de PHP :  5.6.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `epidemicsystem`
--

-- --------------------------------------------------------

--
-- Structure de la table `posts`
--

CREATE TABLE `posts` (
  `id_post` int(11) NOT NULL,
  `title` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_time` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `posts`
--

INSERT INTO `posts` (`id_post`, `title`, `create_time`, `description`, `status`, `id_user`) VALUES
(2, 'cas', '2022-01-31', 'i have a declaration to say', 'Invalid', 13),
(3, 'mythirdpost', '2022-12-23', 'conge', 'Valid', 13),
(4, '4', '2022-01-23', 'mypost444444444444444444444444444', 'Valid', 13),
(5, 'cas contact', '2022-12-23', 'I have a cas contact', 'Invalid', 12),
(7, 'mypost', '2022-01-13', 'this is a declaration', 'Valid', 13),
(8, 'add apost', '2022-01-11', 'i just add a post', 'Invalid', 13),
(9, 'try to add', '2022-01-31', 'tryToAdd', 'Invalid', 13);

-- --------------------------------------------------------

--
-- Structure de la table `relations`
--

CREATE TABLE `relations` (
  `id_relation` int(11) NOT NULL,
  `id_enseigant` int(11) NOT NULL,
  `id_etudiant` int(11) NOT NULL,
  `id_post` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `lastname` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `birthday` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `formation` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`id_user`, `lastname`, `firstname`, `password`, `birthday`, `email`, `formation`, `role`, `photo`) VALUES
(1, 'aaa', 'aaa', 'aaa', '2022-01-03', 'aaa', 'aaa', 'student', ''),
(2, 'a', 'a', 'a', 'a', 'a', 'a', '', ''),
(3, 'sss', 'sss', 'sss', '2000-07-22', 'aaa@dc.com', 'sss', '', ''),
(4, 'Yang', 'Zilu', 'mmm', '2000-07-22', 'yau@163.com', 'mmm', '', ''),
(5, 'Yang', 'Zilu', 'sss', '2000-07-22', 'ya@gmail.com', 'sss', '', ''),
(6, 'sss', 'sssss', 'sss', '2000-07-22', 'dfsdg@com', 'sss', '', ''),
(7, 'sss', 'sss', 'sss', '2000-07-22', 'sss@g.com', 'sss', 'Teacher', 'photo'),
(8, 'sss@com', 'undefined', 'sss', 'undefined', 'undefined', 'undefined', 'Student', 'photo'),
(9, 'eee', 'eee', 'eee', '2000-07-22', 'ee@h.com', 'eee', 'Student', 'photo'),
(10, 'eee', 'eee', 'eee', '2000-07-22', 'ee@h.com', 'eee', 'Student', 'photo'),
(11, 'eee', 'eee', '', '2000-07-22', 'ee@h.com', 'eee', 'Student', 'photo'),
(12, 'ff', 'ff', 'ff', '2000-07-22', 'ff@ff.vom', 'ff', 'Student', 'photo'),
(13, 'uuuu', 'uuu', 'uuuu', '2000-07-22', 'uuu@u.com', 'ComputerInformationSystems', 'Student', 'photo'),
(14, 'aaa', 'aaa', 'aaa', '2000-07-20', 'aaa@gmail.com', 'Bio', 'Student', 'photo'),
(15, 'aaa', 'aaa', 'aaa', '2000-07-20', 'aaa@gmail.com', 'Bio', 'Student', 'photo'),
(16, 'teacher', 'teacher', 'ttt', '1992-06-12', 'ttt@com', 'Computer', 'Teacher', 'photo'),
(17, 'jjj', 'jjj', 'jjj', '1993-07-22', 'jjj@j.com', 'iii', 'Teacher', 'photo'),
(18, 'lll', 'lll', 'lll', '2000-07-22', 'lll@g.com', 'Informatique', 'Student', 'photo');

--
-- Index pour les tables exportées
--

--
-- Index pour la table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id_post`);

--
-- Index pour la table `relations`
--
ALTER TABLE `relations`
  ADD PRIMARY KEY (`id_relation`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `posts`
--
ALTER TABLE `posts`
  MODIFY `id_post` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT pour la table `relations`
--
ALTER TABLE `relations`
  MODIFY `id_relation` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

