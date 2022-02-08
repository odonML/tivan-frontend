import Content from "components/shared/Content";
import ContentGrid from "components/shared/ContentGrid";
import ContentTitle from "components/shared/ContentTitle";
import React from "react";

function Stock() {
  return (
    <ContentGrid>
      <div className="grid col-span-6 row-span-4">
        <Content>
          <ContentTitle>
            <p>Inventario</p>
          </ContentTitle>
        </Content>
      </div>
    </ContentGrid>
  );
}

export default Stock;
