import React from "react";
import Select from 'react-select';
import { useState, useLayoutEffect } from 'react';
import './Other.css'

const mainstats = [
  {
    value: "HP",
    label: "HP",
    id: "10001"
  }, {
    value: "HP%",
    label: "HP%",
    id: "10002"
  }, {
    value: "ATK",
    label: "ATK",
    id: "10003"
  }, {
    value: "ATK%",
    label: "ATK%",
    id: "10004"
  }, {
    value: "DEF",
    label: "DEF",
    id: "10005"
  }, {
    value: "DEF%",
    label: "DEF%",
    id: "10006"
  }, {
    value: "Energy Recharge",
    label: "Energy Recharge",
    id: "10007"
  }, {
    value: "Elemental Mastery",
    label: "Elemental Mastery",
    id: "10008"
  }, {
    value: "CRIT Rate",
    label: "CRIT Rate",
    id: "13007"
  }, {
    value: "CRIT DMG",
    label: "CRIT DMG",
    id: "13008"
  }, {
    value: "Healing Bonus",
    label: "Healing Bonus",
    id: "13009"
  }, {
    value: "Pyro RES",
    label: "Pyro RES",
    id: "10009 "
  }, {
    value: "Electro RES",
    label: "Electro RES",
    id: "10010"
  }, {
    value: "Cryo RES",
    label: "Cryo RES",
    id: "10011"
  }, {
    value: "Hydro RES",
    label: "Hydro RES",
    id: "10012"
  }, {
    value: "Anemo RES",
    label: "Anemo RES",
    id: "10013"
  }, {
    value: "Geo RES",
    label: "Geo RES",
    id: "10014"
  }, {
    value: "Dendro RES",
    label: "Dendro RES",
    id: "10015"
  }, {
    value: "Pyro DMG Bonus",
    label: "Pyro DMG Bonus",
    id: "15008"
  }, {
    value: "Electro DMG Bonus",
    label: "Electro DMG Bonus",
    id: "15009"
  }, {
    value: "Cryo DMG Bonus",
    label: "Cryo DMG Bonus",
    id: "15010"
  }, {
    value: "Hydro DMG Bonus",
    label: "Hydro DMG Bonus",
    id: "15011"
  }, {
    value: "Anemo DMG Bonus",
    label: "Anemo DMG Bonus",
    id: "15012"
  }, {
    value: "Geo DMG Bonus",
    label: "Geo DMG Bonus",
    id: "15013"
  }, {
    value: "Dendro DMG Bonus",
    label: "Dendro DMG Bonus",
    id: "15014"
  }, {
    value: "Physical DMG Bonus",
    label: "Physical DMG Bonus",
    id: "15015"
  }
];

const substasts = [
  {
    value: "HP",
    label: "HP",
    id: "hp"
  }, {
    value: "HP%",
    label: "HP%",
    id: "hp%"
  }, {
    value: "ATK",
    label: "ATK",
    id: "atk"
  }, {
    value: "ATK%",
    label: "ATK%",
    id: "atk%"
  }, {
    value: "DEF",
    label: "DEF",
    id: "def"
  }, {
    value: "DEF%",
    label: "DEF%",
    id: "def%"
  }, {
    value: "Energy Recharge",
    label: "Energy Recharge",
    id: "er"
  }, {
    value: "Elemental Mastery",
    label: "Elemental Mastery",
    id: "em"
  }, {
    value: "CRIT Rate",
    label: "CRIT Rate",
    id: "cr"
  }, {
    value: "CRIT DMG",
    label: "CRIT DMG",
    id: "cdmg"
  }, {
    value: "CD Reduction",
    label: "CD Reduction",
    id: "989001"
  }, {
    value: "Healing Bonus",
    label: "Healing Bonus",
    id: "991001"
  }, {
    value: "Incoming Healing Bonus",
    label: "Incoming Healing Bonus",
    id: "990001"
  }, {
    value: "Shield Strength",
    label: "Shield Strength",
    id: "992001"
  }, {
    value: "Movement Speed",
    label: "Movement Speed",
    id: "988001"
  }, {
    value: "Pyro DMG Bonus",
    label: "Pyro DMG Bonus",
    id: "987001"
  }, {
    value: "Electro DMG Bonus",
    label: "Electro DMG Bonus",
    id: "986001"
  }, {
    value: "Hydro DMG Bonus",
    label: "Hydro DMG Bonus",
    id: "985001"
  }, {
    value: "Dendro DMG Bonus",
    label: "Dendro DMG Bonus",
    id: "984001"
  }, {
    value: "Anemo DMG Bonus",
    label: "Anemo DMG Bonus",
    id: "983001"
  }, {
    value: "Cryo DMG Bonus",
    label: "Cryo DMG Bonus",
    id: "981001"
  }, {
    value: "Geo DMG Bonus",
    label: "Geo DMG Bonus",
    id: "982001"
  }, {
    value: "Physical DMG Bonus",
    label: "Physical DMG Bonus",
    id: "980001"
  }, {
    value: "Pyro RES",
    label: "Pyro RES",
    id: "979001"
  }, {
    value: "Electro RES",
    label: "Electro RES",
    id: "978001"
  }, {
    value: "Hydro RES",
    label: "Hydro RES",
    id: "977001"
  }, {
    value: "Dendro RES",
    label: "Dendro RES",
    id: "976001"
  }, {
    value: "Anemo RES",
    label: "Anemo RES",
    id: "975001"
  }, {
    value: "Cryo RES",
    label: "Cryo RES",
    id: "973001"
  }, {
    value: "Geo RES",
    label: "Geo RES",
    id: "974001"
  }, {
    value: "Phys RES",
    label: "Phys RES",
    id: "972001"
  }, {
    value: "DMG Bonus",
    label: "DMG Bonus",
    id: "971001"
  }, {
    value: "DMG Reduction",
    label: "DMG Reduction",
    id: "970001"
  }
]

const options = [
  {
    value: "Witch's Flower of Blaze",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357138/4e6595d52b0c29bfebf15df76a976321.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Witch's Flower of Blaze</span></div>,
    id: "80544"
  }, {
    value: "Witch's Ever-Burning Plume",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357140/7a6cb6ae67862ab7db9f297574fddfd8.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Witch's Ever-Burning Plume</span></div>,
    id: "80524"
  }, {
    value: "Witch's End Time",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357142/50981e37675eae3fb2778c6e5afc0329.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Witch's End Time</span></div>,
    id: "80554"
  }, {
    value: "Witch's Heart Flames",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357139/f0ff31bc35966edc4bdc8678808ddb5f.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Witch's Heart Flames</span></div>,
    id: "80514"
  }, {
    value: "Witch's Scorching Hat",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357141/c90f01b8f2ab96725b8bd1eef86e5db0.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Witch's Scorching Hat</span></div>,
    id: "80534"
  }, {
    value: "Snowswept Memory",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357128/2db83f8d580810ad99bfffb410dc2d86.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Snowswept Memory</span></div>,
    id: "71544"
  }, {
    value: "Icebreaker's Resolve",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357131/55b0d11e84b939c539f3e8a8f81e04ba.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Icebreaker's Resolve</span></div>,
    id: "71524"
  }, {
    value: "Frozen Homeland's Demise",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357132/f0d8b62861fba1fbc6263fb509ba1ab2.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Frozen Homeland's Demise</span></div>,
    id: "71554"
  }, {
    value: "Frost-Weaved Dignity",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357129/47122a9835ec7a5591e8e4b6467182fe.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Frost-Weaved Dignity</span></div>,
    id: "71514"
  }, {
    value: "Broken Rime's Echo",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357130/9d1e0adbb671a0c97cd1dab36dff26f4.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Broken Rime's Echo</span></div>,
    id: "71534"
  }, {
    value: "Soulscent Bloom",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3505545/d4cfb598bfac7b177b53551d060e2db1.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Soulscent Bloom</span></div>,
    id: "23614"
  }, {
    value: "Jade Leaf",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3505554/0907a35f461ddb93c4ba117fbac33863.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Jade Leaf</span></div>,
    id: "23612"
  }, {
    value: "Symbol of Felicitation",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3505556/0f0809959617f165e5431d4c960705b9.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Symbol of Felicitation</span></div>,
    id: "23615"
  }, {
    value: "Chalice of the Font",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3505558/039547e35abc77f7a50737f189a93761.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Chalice of the Font</span></div>,
    id: "23611"
  }, {
    value: "Flowing Rings",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3505559/c93fa2f90a1437a325edfa868c59f478.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Flowing Rings</span></div>,
    id: "23613"
  }, {
    value: "Magnificent Tsuba",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3397405/a433d977e1c7c160422861b1a086ea58.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Magnificent Tsuba</span></div>,
    id: "24804"
  }, {
    value: "Sundered Feather",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3397429/928992f15b32be9ed411db4d4bd69a4f.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Sundered Feather</span></div>,
    id: "24802"
  }, {
    value: "Storm Cage",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3397433/126495867ed9467e631fe05b5605b41b.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Storm Cage</span></div>,
    id: "24805"
  }, {
    value: "Scarlet Vessel",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3397430/e0c85c3bb4c2e02116dc958fbfaf6185.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Scarlet Vessel</span></div>,
    id: "24801"
  }, {
    value: "Ornate Kabuto",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3397431/c9c41d27b898d1fe5f08adbe676c9fc0.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Ornate Kabuto</span></div>,
    id: "24803"
  }, {
    value: "Gladiator's Nostalgia",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357144/3d2b0affd32f16c9a5aff0af91ba81f3.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Gladiator's Nostalgia</span></div>,
    id: "75544"
  }, {
    value: "Gladiator's Destiny",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357143/4e94ca3572c48b7ac120bda8f4518abc.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Gladiator's Destiny</span></div>,
    id: "75524"
  }, {
    value: "Gladiator's Longing",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357145/59cafee5d801b6de07559ac542dee830.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Gladiator's Longing</span></div>,
    id: "75554"
  }, {
    value: "Gladiator's Intoxication",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357147/330236844301709a99de1193953c8661.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Gladiator's Intoxication</span></div>,
    id: "75514"
  }, {
    value: "Gladiator's Triumphus",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357146/5c16b44ab5d669dee3cc328cd69b4489.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Gladiator's Triumphus</span></div>,
    id: "75534"
  }, {
    value: "Gilded Corsage",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357150/7ee57d9051ae890fea7494209673bb56.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Gilded Corsage</span></div>,
    id: "90544"
  }, {
    value: "Gust of Nostalgia",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357152/2cb50efd6ec37c376110f142ba8fdcbb.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Gust of Nostalgia</span></div>,
    id: "90524"
  }, {
    value: "Copper Compass",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357148/5c7f80b759f6efe2783d83ac709674da.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Copper Compass</span></div>,
    id: "90554"
  }, {
    value: "Goblet of Thundering Deep",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357151/32af6ad38a1d110f8673ba5cbcfcde48.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Goblet of Thundering Deep</span></div>,
    id: "90514"
  }, {
    value: "Wine-Stained Tricorne",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357149/f900e191300afa3507b2bf63316cbf2f.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Wine-Stained Tricorne</span></div>,
    id: "90534"
  }, {
    value: "Bloom Times",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3453210/f3a8e68db064a7f60fbd482e07ade454.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Bloom Times</span></div>,
    id: "24824"
  }, {
    value: "Plume of Luxury",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3453734/7f4f670aaae1b030a2ea6ddd3fc02ae9.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Plume of Luxury</span></div>,
    id: "24822"
  }, {
    value: "Song of Life",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3453736/c3774b1f61d6a46173645889bcbbc87d.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Song of Life</span></div>,
    id: "24825"
  }, {
    value: "Calabash of Awakening",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3453206/47e3ce6c3d35271139f464c988d1db92.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Calabash of Awakening</span></div>,
    id: "24821"
  }, {
    value: "Skeletal Hat",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3453205/2ca6777afb1723a5e745effb8caa4e02.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Skeletal Hat</span></div>,
    id: "24823"
  }, {
    value: "Royal Flora",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357164/bbee5fc07af67a4c8ce0becbf4163061.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Royal Flora</span></div>,
    id: "81544"
  }, {
    value: "Royal Plume",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357166/f8fcb7f132768387b35f8d240f3cc42f.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Royal Plume</span></div>,
    id: "81524"
  }, {
    value: "Royal Pocket Watch",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357163/5cf526c71cd1d9a916f65f1c8237098e.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Royal Pocket Watch</span></div>,
    id: "81554"
  }, {
    value: "Royal Silver Urn",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357167/55d05590cacc455fec2003f62a30e3ab.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Royal Silver Urn</span></div>,
    id: "81514"
  }, {
    value: "Royal Masque",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357165/882973839ee16bfba014127ddf2fb632.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Royal Masque</span></div>,
    id: "81534"
  }, {
    value: "Sea-Dyed Blossom",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3453209/48749ef9918ef481797a0ca8294e9bec.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Sea-Dyed Blossom</span></div>,
    id: "96544"
  }, {
    value: "Deep Palace's Plume",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3453299/10ca1cf1590e8159ac8e311b78e8fe31.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Deep Palace's Plume</span></div>,
    id: "96524"
  }, {
    value: "Cowry of Parting",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3453207/b21e9152413b9a5e7a6fd2bd963f401b.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Cowry of Parting</span></div>,
    id: "96554"
  }, {
    value: "Pearl Cage",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3453208/451351c833dcc808f6d93b634599ed30.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Pearl Cage</span></div>,
    id: "96514"
  }, {
    value: "Crown of Watatsumi",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3453735/0e30141979a7d4d89c53e5c773f6c6ad.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Crown of Watatsumi</span></div>,
    id: "96534"
  }, {
    value: "Stainless Bloom",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3346878/7965c258284812405bd8822b930a1e69.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Stainless Bloom</span></div>,
    id: "92544"
  }, {
    value: "Wise Doctor's Pinion",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3346880/39f7eee8fe3e15ef4844bb9da037542d.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Wise Doctor's Pinion</span></div>,
    id: "95224"
  }, {
    value: "Moment of Cessation",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3346875/249e4d370579b3a29803430b66d6ffaa.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Moment of Cessation</span></div>,
    id: "92554"
  }, {
    value: "Surpassing Cup",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3346873/7cd12a74e382b0d30568bc78d312d15c.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Surpassing Cup</span></div>,
    id: "92514"
  }, {
    value: "Mocking Mask",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3346882/84faf6f0ac44ebec7bcda4ec1e809981.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Mocking Mask</span></div>,
    id: "92534"
  }, {
    value: "Entangling Bloom",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3397406/c57cbad645fd6d8360fc5dd16fe0ec3f.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Entangling Bloom</span></div>,
    id: "24194"
  }, {
    value: "Shaft of Remembrance",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3397427/2174d53e5449fcbfbcc0b8e89b11edcb.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Shaft of Remembrance</span></div>,
    id: "24192"
  }, {
    value: "Morning Dew's Moment",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3397432/a592e0c7c89b02cfba0906d67921415b.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Morning Dew's Moment</span></div>,
    id: "24195"
  }, {
    value: "Hopeful Heart",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3397426/c7e39a858bee158ca040e0032dcfbb41.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Hopeful Heart</span></div>,
    id: "24191"
  }, {
    value: "Capricious Visage",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3397428/7d12f9e3cb1549d8de9e82dcdcfafeba.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Capricious Visage</span></div>,
    id: "24193"
  }, {
    value: "Summer Night's Bloom",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357174/6a7b216bd2f7b32d9c0a31d0286f03ab.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Summer Night's Bloom</span></div>,
    id: "89544"
  }, {
    value: "Summer Night's Finale",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357177/0f14fce86f76bc15e916ff06d63fe14b.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Summer Night's Finale</span></div>,
    id: "89524"
  }, {
    value: "Summer Night's Moment",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357173/d107819802c1d7b78f1313d5ae006a96.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Summer Night's Moment</span></div>,
    id: "89554"
  }, {
    value: "Summer Night's Waterballoon",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357176/5a309d4f86498ef930a53354ab812ec0.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Summer Night's Waterballoon</span></div>,
    id: "89514"
  }, {
    value: "Summer Night's Mask",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3357175/fcec18828436e97d1b424374f70e8583.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Summer Night's Mask</span></div>,
    id: "89534"
  }, {
    value: "Flower of Accolades",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3346877/5838da412d43bcacfc0dda873ca64a54.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Flower of Accolades</span></div>,
    id: "24224"
  }, {
    value: "Ceremonial War-Plume",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3346876/532abee54bcc8a161d9f943b9c76db72.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Ceremonial War-Plume</span></div>,
    id: "24222"
  }, {
    value: "Orichalceous Time-Dial",
    label: <div style={{ display: 'inline-block' }}><img src='https://img.game8.co/3346881/94968cb6fb25b12f2868e041d901b93f.png/show'
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Orichalceous Time-Dial</span></div>,
    id: "24225"
  }, {
    value: "Noble's Pledging Vessel",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3346879/4596584038c08eb792e4bac687ccb8dd.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Noble's Pledging Vessel</span></div>,
    id: "24221"
  }, {
    value: "General's Ancient Helm",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3346874/27f99b6c8ecf5011162520464b8c3ee5.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;General's Ancient Helm</span></div>,
    id: "24223"
  }, {
    value: "Thunderbird's Mercy",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3358320/0063bf9308424e6b15e3008a24c5a204.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Thunderbird's Mercy</span></div>,
    id: "79544"
  }, {
    value: "Survivor of Catastrophe",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3358322/1b1c8c5f39a716783248dd85f17d16f4.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Survivor of Catastrophe</span></div>,
    id: "79524"
  }, {
    value: "Hourglass of Thunder",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3358321/271c00c817f653ae4bfe34213511fef2.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Hourglass of Thunder</span></div>,
    id: "79554"
  }, {
    value: "Omen of Thunderstorm",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3358319/210759b81b13cae1ad0f06eb7978a577.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Omen of Thunderstorm</span></div>,
    id: "79514"
  }, {
    value: "Thunder Summoner's Crown",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3358318/7764cb75dce4215e473809588a29b32b.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Thunder Summoner's Crown</span></div>,
    id: "79534"
  }, {
    value: "Thundersoother's Heart",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3358324/e989939f766aa20189e6a6101075951e.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Thundersoother's Heart</span></div>,
    id: "23444"
  }, {
    value: "Thundersoother's Plume",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3358323/45f4a5cd9252eb42df00a4459bb19ce5.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Thundersoother's Plume</span></div>,
    id: "23442"
  }, {
    value: "Hour of Soothing Thunder",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3358327/4f0f2321bda3d0f29b6b742d337486ce.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Hour of Soothing Thunder</span></div>,
    id: "23445"
  }, {
    value: "Thundersoother's Goblet",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3358326/b8ab0354c79f6abac0f296b42f770191.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Thundersoother's Goblet</span></div>,
    id: "23441"
  }, {
    value: "Thundersoother's Diadem",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3358325/2683907802491dd00b5b67098f13a46b.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Thundersoother's Diadem</span></div>,
    id: "23443"
  }, {
    value: "Flowering Life",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3505546/4e9fac43d8a0cfe8dddb8cd8a310177a.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Flowering Life</span></div>,
    id: "97544"
  }, {
    value: "Feather of Nascent Light",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3505557/114b18819e23887443fc9e984d8f9cf1.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;MFeather of Nascent Light</span></div>,
    id: "97524"
  }, {
    value: "Solar Relic",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3505553/3bc74477b6b64c7b6eda411e79b4f946.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Solar Relic</span></div>,
    id: "97554"
  }, {
    value: "Moment of the Pact",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3505555/0ebc994d62f89dc6405097817dbb9925.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Moment of the Pact</span></div>,
    id: "97514"
  }, {
    value: "Thundering Poise",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3505552/cdb772515ef0a6e065e506db764192e3.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Thundering Poise</span></div>,
    id: "97534"
  }, {
    value: "In Rememberence of Viridescent Fields",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357184/9eb2d7ff38a9060e231e8c88021b91c9.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;In Rememberence of Viridescent Fields</span></div>,
    id: "24654"
  }, {
    value: "Viridescent Arrow Feather",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357186/25d5f006d355b99ddb607e5537be5527.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Viridescent Arrow Feather</span></div>,
    id: "24652"
  }, {
    value: "Viridescent Venerer's Determination",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357185/81bd8983fe561d7604f14a59dfd3fe0d.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Viridescent Venerer's Determination</span></div>,
    id: "24655"
  }, {
    value: "Viridescent Venerer's Vessel",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357187/fb24f723a68010c4d0cda68a01656b52.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Viridescent Venerer's Vessel</span></div>,
    id: "24651"
  }, {
    value: "Viridescent Venerer's Diadem",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357188/c5918612911deb861634ad4b38180371.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Viridescent Venerer's Diadem</span></div>,
    id: "24653"
  }, {
    value: "Troupe's Dawnlight",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357189/fdfdc59fe3227f6513b722696a2de431.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Troupe's Dawnlight</span></div>,
    id: "77544"
  }, {
    value: "Bard's Arrow Feather",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357190/6a72fb2cee812a9b2be823ca55b551b5.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Bard's Arrow Feather</span></div>,
    id: "77524"
  }, {
    value: "Concert's Final Hour",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357193/c8cac6d966b6852a2da285b767948b77.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Concert's Final Hour</span></div>,
    id: "77554"
  }, {
    value: "Wanderer's String-Kettle",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357192/04e64da4decf292074fe75f2b529e067.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Wanderer's String-Kettle</span></div>,
    id: "77514"
  }, {
    value: "Conductor's Top Hat",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357191/d391d64b29acf6c949b760f3c60aac18.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Conductor's Top Hat</span></div>,
    id: "77534"
  }, {
    value: "Lavawalker's Resolution",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357154/c09a5f3c234fa007d51d6f2b12396c3a.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Lavawalker's Resolution</span></div>,
    id: "73544"
  }, {
    value: "Lavawalker's Salvation",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357157/091d5fba3606bb6d179619dd19901af5.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Lavawalker's Salvation</span></div>,
    id: "73524"
  }, {
    value: "Lavawalker's Torment",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357155/a4273ed4fe3f6800efb27b5637484580.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Lavawalker's Torment</span></div>,
    id: "73554"
  }, {
    value: "Lavawalker's Epiphany",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357156/eaebe37de80bb4884f691d027be1c21d.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Lavawalker's Epiphany</span></div>,
    id: "73514"
  }, {
    value: "Lavawalker's Wisdom",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357153/a6b7e0f975838f5f2168196137237e95.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Lavawalker's Wisdom</span></div>,
    id: "73534"
  }, {
    value: "Bloodstained Flower of Iron",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357134/8281235fff42b36b77bd8dfb54d4df79.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Bloodstained Flower of Iron</span></div>,
    id: "82544"
  }, {
    value: "Bloodstained Black Plume",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357137/8e305ec1e6a0a3f1f5a47b3c35d4074b.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Bloodstained Black Plume</span></div>,
    id: "82524"
  }, {
    value: "Bloodstained Final Hour",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357133/8e3bc2f35c2b6d0ecfd22ba87638a67a.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Bloodstained Final Hour</span></div>,
    id: "82554"
  }, {
    value: "Bloodstained Chevalier's Goblet",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357135/4ddb7ba3e689d5013f51bfe4273e45e4.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Bloodstained Chevalier's Goblet</span></div>,
    id: "82514"
  }, {
    value: "Bloodstained Iron Mask",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357136/b80ec46b7bb4801b0a9d4a5080554db6.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Bloodstained Iron Mask</span></div>,
    id: "82534"
  }, {
    value: "Flower of the Creviced Cliff",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357124/37a8e256ee7573743a3ac9c291272ab7.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Flower of the Creviced Cliff</span></div>,
    id: "88544"
  }, {
    value: "Feather of Jagged Peaks",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357125/0671c93e683e57146ae024c110aac544.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Feather of Jagged Peaks</span></div>,
    id: "88524"
  }, {
    value: "Sundial of Enduring Jade",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357127/149f97cb6dd2bd38ac1a074ce3ebef2e.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Sundial of Enduring Jade</span></div>,
    id: "88554"
  }, {
    value: "Goblet of Chiseled Crag",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357126/4c30682bd6f81f7cdabd84d71e87547a.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Goblet of Chiseled Crag</span></div>,
    id: "88514"
  }, {
    value: "Mask of Solitude Basalt",
    label: <div style={{ display: 'inline-block' }}><img src="https://img.game8.co/3357123/d9b9066f5c9b80cb48a4f44668cfaf08.png/show"
      alt='' style={{ verticalAlign: 'middle', width: '25px', height: '25px' }} />
      <span style={{ verticalAlign: 'middle' }}>&ensp;Mask of Solitude Basalt</span></div>,
    id: "88534"
  },
];

function Other() {

  const [artifact, setArtifact] = useState(0)
  const [mainstat, setMainStat] = useState(0)

  const [substat1, setSubstat1] = useState(0)
  const [t1, setT1] = useState(1)

  const [substat2, setSubstat2] = useState(0)
  const [t2, setT2] = useState(1)

  const [substat3, setSubstat3] = useState(0)
  const [t3, setT3] = useState(1)

  const [substat4, setSubstat4] = useState(0)
  const [t4, setT4] = useState(1)

  const [level, setLevel] = useState(1)

  useLayoutEffect(() => {
    if (level < 1) {
      setLevel(1)
    }
  }, [level])

  return (
    <div className="formDiv">
      <h3 style={{ textAlign: "center" }} >Artifact Command Generator
      </ h3>
      <div>
        <form>
          <div style={{ paddingBottom: '10px' }}>
            <label htmlFor="studName">Artifact</label>
            <Select options={options} onChange={(e) => setArtifact(e.id)} />
          </div>
          <div style={{ paddingBottom: '10px' }}>
            <label htmlFor="emailId">Mainstat</label>
            <Select options={mainstats} onChange={(e) => setMainStat(e.id)} />
          </div>
          <div style={{ paddingBottom: '10px', width: '97%', float: 'left' }}>
            <label htmlFor="text">Substat-1</label>
            <Select options={substasts} onChange={(e) => setSubstat1(e.id)} />
          </div>
          <div style={{ paddingBottom: '10px', width: '3%', float: 'right' }}>
            <label htmlFor="text">Times</label>
            <input
              type='number' min='1' defaultValue='1'
              style={{ width: '50px', height: '38px' }}
              onChange={(e) => setT1(e.target.value)}
            />
          </div>
          <div style={{ paddingBottom: '10px', width: '97%', float: 'left' }}>
            <label htmlFor="text">Substat-2</label>
            <Select options={substasts} onChange={(e) => setSubstat2(e.id)} />
          </div>
          <div style={{ paddingBottom: '10px', width: '3%', float: 'right' }}>
            <label htmlFor="text">Times</label>
            <input
              type='number' min='1' defaultValue='1'
              style={{ width: '50px', height: '38px' }}
              onChange={(e) => setT2(e.target.value)}
            />
          </div>
          <div style={{ paddingBottom: '10px', width: '97%', float: 'left' }}>
            <label htmlFor="text">Substat-3</label>
            <Select options={substasts} onChange={(e) => setSubstat3(e.id)} />
          </div>
          <div style={{ paddingBottom: '10px', width: '3%', float: 'right' }}>
            <label htmlFor="text">Times</label>
            <input
              type='number' min='1' defaultValue='1'
              style={{ width: '50px', height: '38px' }}
              onChange={(e) => setT3(e.target.value)}
            />
          </div>
          <div style={{ paddingBottom: '10px', width: '97%', float: 'left' }}>
            <label htmlFor="text">Substat-4</label>
            <Select options={substasts} onChange={(e) => setSubstat4(e.id)} />
          </div>
          <div style={{ paddingBottom: '10px', width: '3%', float: 'right' }}>
            <label htmlFor="text">Times</label>
            <input
              type='number' min='1' defaultValue='1'
              style={{ width: '50px', height: '38px' }}
              onChange={(e) => setT4(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="text">Level Artifact: &ensp;</label>
            <input
              type='number' min='1' max='21' defaultValue='1'
              style={{ width: '100px', height: '38px' }}
              onChange={(e) => setLevel(e.target.value)}
            />
            <b style={{ color: 'red' }}>&ensp; *Note: </b>
            The maximum artifact in-game level can only be 20 (21 for command)
          </div>
          <div style={{ paddingBottom: '10px' }}>
            <label htmlFor="text" style={{ color: 'red' }}>Command</label>
            <p>
              /giveart {artifact} {mainstat} {substat1},{t1} {substat2},{t2} {substat3},{t3} {substat4},{t4} {Number(level) + 1}
            </p>
          </div>
        </form>
      </div>
    </div >
  )

}

export default Other;