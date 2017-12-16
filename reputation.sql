-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 16, 2017 at 02:12 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `reputation`
--

-- --------------------------------------------------------

--
-- Table structure for table `experience`
--

CREATE TABLE `experience` (
  `id` int(100) NOT NULL,
  `user_id` int(100) NOT NULL,
  `proof` varchar(1000) NOT NULL,
  `date_added` date NOT NULL,
  `approved` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `experience`
--

INSERT INTO `experience` (`id`, `user_id`, `proof`, `date_added`, `approved`) VALUES
(1, 1, 'creep.jpg', '2017-09-29', 1),
(2, 1, 'creep.jpg', '2017-09-29', 1),
(3, 1, 'creep.jpg', '2017-09-29', 1),
(4, 1, 'creep.jpg', '2017-09-29', 1),
(5, 4, 'creep.jpg', '2017-09-29', 1),
(6, 4, 'creep.jpg', '2017-09-29', 1),
(7, 2, 'creep.jpg', '2017-09-29', 1),
(8, 2, 'creep.jpg', '2017-09-29', 1),
(9, 3, 'creep.jpg', '2017-09-29', 1),
(10, 1, 'creep.jpg', '2017-09-29', 1),
(11, 1, 'YD-1204-BLACK-SIDE.jpg', '2017-10-01', -1),
(12, 1, 'YD-1204-BLACK-FRONT.jpg', '2017-10-01', -1),
(13, 1, 'YD-1204-BLACK-BACK.jpg', '2017-10-01', -1),
(14, 1, 'YD-1204-BLACK-SIDE.jpg', '2017-10-01', -1),
(15, 1, 'YD-1204-BLACK-SIDE.jpg', '2017-10-01', -1),
(16, 1, 'YD-1204-BLACK-SIDE.jpg', '2017-10-01', -1),
(17, 1, 'YD-1204-BLACK-FRONT.jpg', '2017-10-01', -1),
(18, 1, 'YD-1204-BLACK-SIDE.jpg', '2017-10-01', -1),
(19, 1, 'YD-1204-BLACK-FRONT.jpg', '2017-10-01', -1),
(20, 1, 'YD-1204-BLACK-FRONT.jpg', '2017-10-01', -1),
(21, 1, 'YD-1204-BLACK-FRONT.jpg', '2017-10-01', -1),
(22, 1, 'YD-1204-BLACK-SIDE.jpg', '2017-10-01', -1),
(23, 1, 'YD-1204-BLACK-SIDE.jpg', '2017-10-01', -1),
(24, 1, 'YD-1204-BLACK-FRONT.jpg', '2017-10-01', -1),
(25, 1, 'YD-1204-BLACK-SIDE.jpg', '2017-10-01', -1),
(26, 1, 'YD-1204-BLACK-SIDE.jpg', '2017-10-01', -1),
(27, 1, 'YD-1204-BLACK-BACK.jpg', '2017-10-01', -1),
(28, 1, 'YD-1204-BLACK-BACK.jpg', '2017-10-01', -1),
(29, 1, 'YD-1204-BLACK-FRONT.jpg', '2017-10-01', -1),
(30, 1, 'YD-1204-BLACK-BACK.jpg', '2017-10-01', -1),
(31, 1, 'YD-1204-BLACK-FRONT.jpg', '2017-10-01', -1),
(32, 1, 'YD-1204-BLACK-SIDE.jpg', '2017-10-01', -1),
(33, 1, 'YD-1204-BLACK-SIDE.jpg', '2017-10-01', -1),
(34, 12, 'YD-1204-BLACK-FRONT.jpg', '2017-10-08', 1),
(35, 12, 'YP-1377-ROYAL-BLUE-BACK.jpg', '2017-10-08', 1),
(36, 12, 'YP-1377-ROYAL-BLUE-SIDE.jpg', '2017-10-08', 1),
(37, 12, 'WhatsApp Image 2017-10-23 at 11.23.27 AM.jpeg', '2017-10-09', 1),
(38, 12, 'WhatsApp Image 2017-10-23 at 11.23.27 AM.jpeg', '2017-10-09', -1),
(39, 12, 'PT-2113-MULTIFLORAL-2.jpg', '2017-10-09', -1),
(40, 12, 'WhatsApp Image 2017-10-23 at 1.59.19 PM.jpeg', '2017-10-15', -1),
(41, 12, '20171116_122943.jpg', '2017-11-01', -1),
(42, 12, '5906 -BLUE-NAVY-WOGB-1.jpg', '2017-11-01', 1),
(43, 12, '56be302cc4e93.image.jpg', '2017-11-01', 1),
(44, 1, '5906-Chiffon Bolero Olive-1b.jpg', '2017-11-05', -1),
(45, 1, 'D5A17AEF-5B0E-4269-B611-2D010E04E59C.png', '2017-11-05', -1),
(46, 1, '5906-Chiffon Bolero Olive-1b.jpg', '2017-11-05', -1),
(47, 1, '5906-Chiffon Bolero Olive-1.JPG', '2017-11-05', -1),
(48, 1, '20171116_122943.jpg', '2017-11-05', -1),
(49, 1, 'D5A17AEF-5B0E-4269-B611-2D010E04E59C.png', '2017-11-05', -1),
(50, 1, 'WhatsApp Image 2017-10-23 at 11.21.33 AM.jpeg', '2017-11-05', 1),
(51, 1, 'YD-1166.jpg', '2017-11-05', 1),
(52, 1, 'PC-906-907-919 - Copy.jpg', '2017-11-05', 1),
(53, 1, 'AF7EC8F7-E5E1-4259-BB9E-E33C9465BB7B.png', '2017-11-05', -1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `username` varchar(25) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `avatar` varchar(100) NOT NULL DEFAULT 'avatar.png',
  `gll_name` varchar(100) NOT NULL,
  `date_join` date NOT NULL,
  `approved` tinyint(1) NOT NULL DEFAULT '0',
  `admin` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `avatar`, `gll_name`, `date_join`, `approved`, `admin`) VALUES
(1, 'josan', 'josan.iracheta@gmail.com', '2952208012', 'josan.jpg', 'josan', '2017-09-29', 1, 0),
(2, 'adonay', 'adonay@adonay.com', 'adonay123', 'adonay.jpg', 'adonay', '2017-09-29', 1, 0),
(3, 'eric', 'eric@eric.com', 'eric123', 'eric.jpg', 'eric', '2017-09-29', 1, 0),
(4, 'jizzy', 'jizzy@jizzy.com', 'jizzy123', 'jizzy.jpg', 'jizzy', '2017-09-29', 1, 0),
(12, 'nsa', 'vedaco@gmail.com', '3855953577', '56be302cc4e93.image.jpg', 'nsa', '2017-11-07', 1, 0),
(13, 'staythirsty', 'josan.iracheta@gmail.com', '2952208012', 'avatar.png', 'nsa', '2017-11-15', 1, 0),
(14, 'fakeaccount', 'josan.iracheta@gmail.com', '2692298652', 'avatar.png', 'fake', '2017-12-06', -1, 0),
(15, 'fakeaccount2', 'josan.iracheta@gmail.com', '2692298652', 'avatar.png', 'fake2', '2017-12-06', -1, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `experience`
--
ALTER TABLE `experience`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
