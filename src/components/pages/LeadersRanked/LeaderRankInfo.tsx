import { observer } from "mobx-react-lite";
import { useDrag } from "react-dnd";
import styled from "@emotion/styled";
import React from "react";
import { LeaderRankInfoProps } from "./LeadersRanked.d";

const LeaderRankInfo: React.FC<LeaderRankInfoProps> = observer(({ leader }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'card',
    item: () => {
      return { id: leader.id }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }), [leader]);

  return (
      <WrapperStyled
        ref={drag}
        style={{
            opacity: isDragging ? 0.5 : 1,
            fontSize: 25,
            fontWeight: 'bold',
            cursor: 'move',
        }}
      >
        <AvatarBadge
            alt={leader.name}
            src={leader.avatar}
        />
      </WrapperStyled>
  )
});

const AvatarBadge = styled.img`
  width: 100px;
  height: 100px;
`

const WrapperStyled = styled.div`
display: flex;
align-content: center;
justify-content: center;
align-items: center;
    
`

export default LeaderRankInfo;