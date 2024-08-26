// import { FunctionComponent } from "react";
// import Navigation1 from "../components/Navigation1";
// import FrameComponent from "../components/FrameComponent";
// import styled from "styled-components";
// import CardOne from "../components/CardOne";
// import GroupComponent from "../components/GroupComponent";

// const TaskList = styled.a`
//   text-decoration: none;
//   position: relative;
//   font-weight: 500;
//   color: inherit;
//   white-space: pre-wrap;
//   @media screen and (max-width: 450px) {
//     font-size: 23px;
//   }
// `;
// const TaskListHeader = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: flex-start;
//   padding: 0px var(--padding-12xs);
// `;
// const WorkflowStatusChild = styled.div`
//   width: 360px;
//   height: 840px;
//   position: relative;
//   border-radius: var(--br-3xs);
//   background-color: var(--color-whitesmoke);
//   display: none;
//   max-width: 100%;
// `;
// const ToDo = styled.div`
//   position: relative;
//   font-weight: 500;
//   display: inline-block;
//   min-width: 45px;
//   z-index: 1;
// `;
// const FrameChild = styled.div`
//   height: 207px;
//   width: 312px;
//   position: relative;
//   border-radius: var(--br-xl);
//   background-color: var(--color-white);
//   display: none;
//   z-index: 1;
// `;
// const AppCardOneChild = styled.div`
//   width: 9px;
//   height: 9px;
//   position: relative;
//   border-radius: 50%;
//   background-color: var(--color-forestgreen);
//   z-index: 1;
// `;
// const AppCardOne = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   padding: var(--padding-12xs) 0px 0px;
// `;
// const FunctionalApp = styled.div`
//   position: relative;
//   font-weight: 500;
//   display: inline-block;
//   min-width: 61px;
//   z-index: 1;
// `;
// const AppCards = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap: var(--gap-8xs);
//   color: var(--color-dimgray);
// `;
// const AzureFunctions = styled.h3`
//   margin: 0;
//   position: relative;
//   font-size: var(--font-size-lg);
//   font-weight: 500;
//   font-family: inherit;
//   z-index: 1;
// `;
// const CreateKyudiwdBkudyd = styled.div`
//   align-self: stretch;
//   position: relative;
//   z-index: 1;
// `;
// const VhItemChild = styled.div`
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   border-radius: 50%;
//   background-color: var(--color-darkslateblue);
//   border: 0px solid var(--color-white);
//   box-sizing: border-box;
//   width: 100%;
//   height: 100%;
//   z-index: 1;
// `;
// const Vh = styled.div`
//   position: absolute;
//   top: 5px;
//   left: 6px;
//   display: inline-block;
//   min-width: 17px;
//   z-index: 2;
// `;
// const VhItem = styled.div`
//   height: 29px;
//   flex: 1;
//   position: relative;
// `;
// const AgItemChild = styled.div`
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   border-radius: 50%;
//   background-color: var(--color-sandybrown);
//   border: 0px solid var(--color-white);
//   box-sizing: border-box;
//   width: 100%;
//   height: 100%;
//   z-index: 2;
// `;
// const Ag = styled.div`
//   position: absolute;
//   top: 5px;
//   left: 6px;
//   display: inline-block;
//   min-width: 18px;
//   z-index: 3;
// `;
// const AgItem = styled.div`
//   height: 29px;
//   flex: 1;
//   position: relative;
//   margin-left: -5px;
// `;
// const AppCardThreeContent = styled.div`
//   width: 53px;
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: flex-start;
//   color: var(--color-white);
// `;
// const AppCardThree = styled.div`
//   align-self: stretch;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap: var(--gap-2xl);
//   font-size: var(--font-size-xs);
// `;
// const BottomLeftContent = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap: var(--gap-5xs);
// `;
// const AppCardFourChild = styled.img`
//   width: 16px;
//   height: 2px;
//   position: relative;
//   z-index: 1;
// `;
// const AppCardFour = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   padding: var(--padding-7xs) 0px 0px;
//   margin-left: -16px;
// `;
// const RectangleParent = styled.div`
//   flex: 1;
//   border-radius: var(--br-xl);
//   background-color: var(--color-white);
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: flex-start;
//   padding: var(--padding-5xl);
//   z-index: 1;
// `;
// const BottomColumns = styled.div`
//   align-self: stretch;
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: flex-start;
//   padding: 0px 0px 0px var(--padding-10xs);
//   font-size: var(--font-size-5xs);
// `;
// const WorkflowStatus = styled.div`
//   flex: 1;
//   border-radius: var(--br-3xs);
//   background-color: var(--color-whitesmoke);
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   padding: var(--padding-5xl) var(--padding-2xl) 556px var(--padding-5xl);
//   box-sizing: border-box;
//   gap: 29px;
//   min-width: 270px;
//   max-width: 100%;
//   @media screen and (max-width: 1125px) {
//     padding-top: var(--padding-xl);
//     padding-bottom: 361px;
//     box-sizing: border-box;
//   }
//   @media screen and (max-width: 450px) {
//     padding-bottom: 235px;
//     box-sizing: border-box;
//   }
// `;
// const InProgress = styled.div`
//   position: relative;
//   font-weight: 500;
//   display: inline-block;
//   min-width: 90px;
//   z-index: 1;
// `;
// const FrameItem = styled.div`
//   width: 312px;
//   height: 207px;
//   position: relative;
//   border-radius: var(--br-xl);
//   background-color: var(--color-white);
//   display: none;
// `;
// const FrameInner = styled.div`
//   height: 29px;
//   width: 29px;
//   position: relative;
//   border-radius: 50%;
//   background-color: var(--color-forestgreen);
//   border: 0px solid var(--color-white);
//   box-sizing: border-box;
//   z-index: 2;
// `;
// const Lk = styled.div`
//   position: relative;
//   display: inline-block;
//   min-width: 13px;
//   z-index: 3;
// `;
// const CardFourDetails = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   padding: var(--padding-8xs) 0px 0px;
//   margin-left: -21px;
// `;
// const EllipseParent = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: flex-start;
//   padding: 0px 8px 0px 0px;
//   margin-left: -5px;
// `;
// const CardThreeContent = styled.div`
//   width: 53px;
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: flex-start;
// `;
// const RectangleGroup = styled.div`
//   align-self: stretch;
//   border-radius: var(--br-xl);
//   background-color: var(--color-white);
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   padding: var(--padding-5xl);
//   gap: var(--gap-2xl);
//   z-index: 1;
//   font-size: var(--font-size-xs);
//   color: var(--color-white);
// `;
// const ToDoContent = styled.div`
//   align-self: stretch;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap: var(--gap-5xl);
// `;
// const ToDoColumn = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap: 11px;
// `;
// const ToDoColumnWrapper = styled.div`
//   align-self: stretch;
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: flex-start;
//   padding: 0px var(--padding-12xs) 0px var(--padding-10xs);
// `;
// const WorkflowStatus1 = styled.div`
//   flex: 1;
//   border-radius: var(--br-3xs);
//   background-color: var(--color-whitesmoke);
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   padding: var(--padding-5xl) var(--padding-3xl) 84px;
//   box-sizing: border-box;
//   gap: 52px;
//   min-width: 270px;
//   max-width: 100%;
//   @media screen and (max-width: 1125px) {
//     padding-top: var(--padding-xl);
//     padding-bottom: var(--padding-36xl);
//     box-sizing: border-box;
//   }
//   @media screen and (max-width: 450px) {
//     gap: 26px;
//     padding-bottom: 36px;
//     box-sizing: border-box;
//   }
// `;
// const Done = styled.div`
//   position: relative;
//   font-weight: 500;
//   display: inline-block;
//   min-width: 42px;
//   z-index: 1;
// `;
// const EllipseDiv = styled.div`
//   width: 9px;
//   height: 9px;
//   position: relative;
//   border-radius: 50%;
//   background-color: var(--color-deeppink);
//   z-index: 1;
// `;
// const QueryConnection = styled.div`
//   position: relative;
//   font-weight: 500;
//   display: inline-block;
//   min-width: 74px;
//   z-index: 1;
// `;
// const SgjtdyukhsgbJuhkhmajbcsZyuhj = styled.div`
//   align-self: stretch;
//   position: relative;
//   font-size: var(--font-size-xs);
//   z-index: 1;
// `;
// const FrameContainer = styled.div`
//   align-self: stretch;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap: var(--gap-5xs);
// `;
// const FrameChild1 = styled.div`
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   border-radius: 50%;
//   background-color: var(--color-deeppink);
//   border: 0px solid var(--color-white);
//   box-sizing: border-box;
//   width: 100%;
//   height: 100%;
//   z-index: 1;
// `;
// const FrameChild2 = styled.div`
//   height: 29px;
//   width: 29px;
//   position: relative;
//   border-radius: 50%;
//   background-color: var(--color-sandybrown);
//   border: 0px solid var(--color-white);
//   box-sizing: border-box;
//   z-index: 2;
// `;
// const Nl = styled.div`
//   position: relative;
//   display: inline-block;
//   min-width: 14px;
//   z-index: 3;
// `;
// const EllipseContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: flex-start;
//   padding: 0px var(--padding-6xs) 0px 0px;
//   margin-left: -5px;
// `;
// const FrameParent = styled.div`
//   width: 53px;
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: flex-start;
//   font-size: var(--font-size-xs);
//   color: var(--color-white);
// `;
// const FrameGroup = styled.div`
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap: 39px;
//   @media screen and (max-width: 450px) {
//     gap: 19px;
//   }
// `;
// const GroupDiv = styled.div`
//   align-self: stretch;
//   border-radius: var(--br-xl);
//   background-color: var(--color-white);
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: flex-start;
//   padding: var(--padding-5xl);
//   z-index: 1;
//   font-size: var(--font-size-5xs);
// `;
// const WorkflowStatus2 = styled.div`
//   flex: 1;
//   border-radius: var(--br-3xs);
//   background-color: var(--color-whitesmoke);
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   padding: var(--padding-lgi) var(--padding-3xl) 324px var(--padding-7xl);
//   box-sizing: border-box;
//   gap: 29.5px;
//   min-width: 270px;
//   max-width: 100%;
//   @media screen and (max-width: 1125px) {
//     padding-top: var(--padding-xl);
//     padding-bottom: 211px;
//     box-sizing: border-box;
//   }
//   @media screen and (max-width: 450px) {
//     padding-bottom: 137px;
//     box-sizing: border-box;
//   }
// `;
// const TaskBoard = styled.div`
//   align-self: stretch;
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: flex-start;
//   padding: 0px 2px 0px 0px;
//   box-sizing: border-box;
//   gap: var(--gap-5xl);
//   max-width: 100%;
//   font-size: var(--font-size-base);
//   @media screen and (max-width: 1125px) {
//     flex-wrap: wrap;
//   }
// `;
// const FrameParent1 = styled.section`
//   align-self: stretch;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap: 35.1px;
//   max-width: 100%;
//   text-align: left;
//   font-size: 29px;
//   color: var(--color-black);
//   font-family: var(--font-poppins);
//   @media screen and (max-width: 800px) {
//     gap: var(--gap-lg);
//   }
// `;
// const RightSidebar = styled.main`
//   width: 1130.5px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
//   padding: var(--padding-lgi) 0px 0px;
//   box-sizing: border-box;
//   max-width: 100%;
// `;
// const DashboardRoot = styled.div`
//   width: 100%;
//   position: relative;
//   background-color: var(--color-white);
//   overflow: hidden;
//   display: flex;
//   flex-direction: row;
//   align-items: flex-start;
//   justify-content: flex-start;
//   gap: var(--gap-lg);
//   line-height: normal;
//   letter-spacing: normal;
//   @media screen and (max-width: 1325px) {
//     flex-wrap: wrap;
//   }
// `;

// const Dashboard = () => {
//   return (
//     <DashboardRoot>
//       <Navigation1 />
//       <RightSidebar>
//         <FrameParent1>
//           <FrameComponent />
//           <TaskListHeader>
//             <TaskList>Task List</TaskList>
//           </TaskListHeader>
//           <TaskBoard>
//             <WorkflowStatus>
//               <WorkflowStatusChild />
//               <ToDo>To do</ToDo>
//               <BottomColumns>
//                 <RectangleParent>
//                   <FrameChild />
//                   <BottomLeftContent>
//                     <AppCards>
//                       <AppCardOne>
//                         <AppCardOneChild />
//                       </AppCardOne>
//                       <FunctionalApp>Functional App</FunctionalApp>
//                     </AppCards>
//                     <AzureFunctions>Azure Functions</AzureFunctions>
//                     <AppCardThree>
//                       <CreateKyudiwdBkudyd>
//                         create kyudiwd bkudyd kxusd kjs hgdvsxusvx jhxsvsijs
//                         xhjgyx sxhisux xjyx sxiyjv jv sjxuysjs nkiwuydwdh skusb
//                       </CreateKyudiwdBkudyd>
//                       <AppCardThreeContent>
//                         <VhItem>
//                           <VhItemChild />
//                           <Vh>VH</Vh>
//                         </VhItem>
//                         <AgItem>
//                           <AgItemChild />
//                           <Ag>AG</Ag>
//                         </AgItem>
//                       </AppCardThreeContent>
//                     </AppCardThree>
//                   </BottomLeftContent>
//                   <AppCardFour>
//                     <AppCardFourChild
//                       loading="lazy"
//                       alt=""
//                       src="/group-544.svg"
//                     />
//                   </AppCardFour>
//                 </RectangleParent>
//               </BottomColumns>
//             </WorkflowStatus>
//             <WorkflowStatus1>
//               <WorkflowStatusChild />
//               <ToDoColumnWrapper>
//                 <ToDoColumn>
//                   <ToDoContent>
//                     <InProgress>In progress</InProgress>
//                     <RectangleGroup>
//                       <FrameItem />
//                       <CardOne
//                         dataSecurity="Data Security"
//                         azureSecurity="Azure Security"
//                         ytedwHjadlskyaudsBjsjkaUsdkiyudb="ytedw hjadlskyauds bjsjka usdkiyudbn uxcyikz cbnjsmga bcntscgiaj uycja cujsc buacja bcsujav cnamtsicj 8ucj cujsc bcuj"
//                       />
//                       <CardThreeContent>
//                         <VhItem>
//                           <VhItemChild />
//                           <Vh>VH</Vh>
//                         </VhItem>
//                         <EllipseParent>
//                           <FrameInner />
//                           <CardFourDetails>
//                             <Lk>LK</Lk>
//                           </CardFourDetails>
//                         </EllipseParent>
//                       </CardThreeContent>
//                     </RectangleGroup>
//                   </ToDoContent>
//                   <GroupComponent
//                     development="Development"
//                     azureIntegration="Azure Integration"
//                     shfdstgvdbHuyjsvCuyscjShcuysjvcm="shfdstgvdb huyjsv cuyscj shcuysjvcm bsdcy8yujcm bshycujvs mbcns8ikhv snci8ichkm sndcgsivkh dmcsubick n"
//                     aG="AG"
//                   />
//                 </ToDoColumn>
//               </ToDoColumnWrapper>
//               <RectangleGroup>
//                 <FrameItem />
//                 <CardOne
//                   propBackgroundColor="#40a737"
//                   dataSecurity="App Manager"
//                   azureSecurity="Azure  AD Manager"
//                   propDisplay="unset"
//                   propMinWidth="unset"
//                   ytedwHjadlskyaudsBjsjkaUsdkiyudb="ytuks kh.jskuays bkika skhiakls,b a cjh skb amcjkausc ikcs ik isc jsy v hicsm juyscjsc iyascjvm uv jsvucvj js"
//                 />
//                 <CardThreeContent>
//                   <VhItem>
//                     <VhItemChild />
//                     <Vh>VH</Vh>
//                   </VhItem>
//                   <AgItem>
//                     <AgItemChild />
//                     <Ag>AG</Ag>
//                   </AgItem>
//                 </CardThreeContent>
//               </RectangleGroup>
//             </WorkflowStatus1>
//             <WorkflowStatus2>
//               <WorkflowStatusChild />
//               <Done>Done</Done>
//               <GroupDiv>
//                 <FrameChild />
//                 <FrameGroup>
//                   <FrameContainer>
//                     <AppCards>
//                       <AppCardOne>
//                         <EllipseDiv />
//                       </AppCardOne>
//                       <QueryConnection>Query Connection</QueryConnection>
//                     </AppCards>
//                     <AzureFunctions>Azure Database</AzureFunctions>
//                     <SgjtdyukhsgbJuhkhmajbcsZyuhj>
//                       sgjtdyukhsgb juhkhmajbcs zyuhjma ch ;ujcm zj hcuijzm xc
//                       ucikm nc
//                     </SgjtdyukhsgbJuhkhmajbcsZyuhj>
//                   </FrameContainer>
//                   <FrameParent>
//                     <VhItem>
//                       <FrameChild1 />
//                       <Vh>HU</Vh>
//                     </VhItem>
//                     <EllipseContainer>
//                       <FrameChild2 />
//                       <CardFourDetails>
//                         <Nl>NL</Nl>
//                       </CardFourDetails>
//                     </EllipseContainer>
//                   </FrameParent>
//                 </FrameGroup>
//                 <AppCardFour>
//                   <AppCardFourChild
//                     loading="lazy"
//                     alt=""
//                     src="/group-544.svg"
//                   />
//                 </AppCardFour>
//               </GroupDiv>
//               <GroupComponent
//                 development="App Local Setup"
//                 propMinWidth="65px"
//                 azureIntegration="Configuration Setting"
//                 shfdstgvdbHuyjsvCuyscjShcuysjvcm="gwejywj hjutgnb uykgwbd ikywhdd kicb nbcywd buckugab cjhc kcuwdc hsix cnbxcgijcm jtyacs bnatscgjasc iya8uisc ma"
//                 propBackgroundColor="#ff2473"
//                 aG="ML"
//               />
//             </WorkflowStatus2>
//           </TaskBoard>
//         </FrameParent1>
//       </RightSidebar>
//     </DashboardRoot>
//   );
// };

// export default Dashboard;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

// const Dashboard = () => {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const fetchTasks = async () => {
//       try {
//         const response = await axios.get('http://127.0.0.1:5000/getTask/4');
//         setTasks(response.data);
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//       }
//     };

//     fetchTasks();
//   }, []);

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Task Dashboard
//       </Typography>
//       <Grid container spacing={3}>
//         {tasks.map(task => (
//           <Grid item xs={12} sm={6} md={4} key={task.id}>
//             <Card>
//               <CardContent>
//                 <Typography variant="h5">{task.title}</Typography>
//                 <Typography variant="body2">{task.description}</Typography>
//                 <Typography variant="caption">Status: {task.status}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import {
  Container, Grid, Card, CardContent, Typography, Drawer, List, ListItem,
  ListItemIcon, ListItemText, Divider, Avatar, IconButton, InputBase,
  AppBar, Toolbar
} from '@mui/material';
import {
  Dashboard as DashboardIcon, Add as AddIcon, ExitToApp as LogoutIcon,
  Search as SearchIcon, MoreVert as MoreVertIcon
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const MainContainer = styled('div')(({ theme }) => ({
  display: 'flex',
}));

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
}));

const DrawerStyled = styled(Drawer)(({ theme = {} }) => ({
  width: theme.drawer?.width || 240, // Use 240 as a fallback
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: theme.drawer?.width || 240,
    boxSizing: 'border-box',
  },
}));

const ToolbarStyled = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.grey[200],
  '&:hover': {
    backgroundColor: theme.palette.grey[300],
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Content = styled('main')(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

const TaskCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  borderRadius: '12px',
}));

const Dashboard = () => {
  const [tasks, setTasks] = useState({ todo: [], inProgress: [], done: [] });
  const navigate = useNavigate();

  useEffect(() => {
    // Example API call
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/getTask/6');
        const data = await response.json();
        console.log("task details fetched from api call", data); // fetching data from api and printing it in console

        // Assuming API returns an array of tasks with status like 'todo', 'in-progress', 'done'
        const groupedTasks = {
          todo: data.filter(task => task.status === 'To Do'),
          inProgress: data.filter(task => task.status === 'Pending'),
          done: data.filter(task => task.status === 'Completed')
        };

        setTasks(groupedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  const handleLogout = () => {
    console.log('Logout');
    // Implement logout functionality
  };

  return (
    <MainContainer>
      <AppBarStyled position="fixed">
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <div style={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <Avatar alt="Profile Picture" src="https://th.bing.com/th/id/OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA?w=184&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7" />
          </IconButton>
        </Toolbar>
      </AppBarStyled>

      <DrawerStyled variant="permanent">
        <ToolbarStyled />
        <List>
          <ListItem button component={Link} to="/dashboard">
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/createtask">
            <ListItemIcon><AddIcon /></ListItemIcon>
            <ListItemText primary="Create TSK" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button onClick={handleLogout}>
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Log out" />
          </ListItem>
        </List>
      </DrawerStyled>

      <Content>
        <ToolbarStyled />
        <Container>
          <Typography variant="h4" gutterBottom>
            Task List
          </Typography>
          <Grid container spacing={3}>
            {/* To Do Tasks */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>To do</Typography>
              {tasks.todo.map((task, index) => (
                <TaskCard key={index}>
                  <CardContent>
                    <Typography variant="caption" color="textSecondary">
                      {task.category} {/* Example field */}
                    </Typography>
                    <Typography variant="h6">{task.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {task.description}
                    </Typography>
                    <Grid container justifyContent="space-between" alignItems="center">
                      <Grid item>
                        <AvatarGroup />
                      </Grid>
                      <Grid item>
                        <IconButton><MoreVertIcon /></IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </TaskCard>
              ))}
            </Grid>

            {/* In Progress Tasks */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>In progress</Typography>
              {tasks.inProgress.map((task, index) => (
                <TaskCard key={index}>
                  <CardContent>
                    <Typography variant="caption" color="textSecondary">
                      {task.category}
                    </Typography>
                    <Typography variant="h6">{task.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {task.description}
                    </Typography>
                    <Grid container justifyContent="space-between" alignItems="center">
                      <Grid item>
                        <AvatarGroup />
                      </Grid>
                      <Grid item>
                        <IconButton><MoreVertIcon /></IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </TaskCard>
              ))}
            </Grid>

            {/* Done Tasks */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>Done</Typography>
              {tasks.done.map((task, index) => (
                <TaskCard key={index}>
                  <CardContent>
                    <Typography variant="caption" color="textSecondary">
                      {task.category}
                    </Typography>
                    <Typography variant="h6">{task.title}</Typography>
                    <Typography variant="body2" color="textSecondary">
                      {task.description}
                    </Typography>
                    <Grid container justifyContent="space-between" alignItems="center">
                      <Grid item>
                        <AvatarGroup />
                      </Grid>
                      <Grid item>
                        <IconButton><MoreVertIcon /></IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </TaskCard>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Content>
    </MainContainer>
  );
};

const AvatarGroup = () => (
  <div style={{ display: 'flex' }}>
    <Avatar sx={{ width: 24, height: 24, marginRight: 1 }}>VH</Avatar>
    <Avatar sx={{ width: 24, height: 24 }}>AG</Avatar>
  </div>
);

export default Dashboard;


