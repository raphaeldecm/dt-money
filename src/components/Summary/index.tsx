import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary(){
  return(
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entrada</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R$ 1000,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>R$ 1000,00</strong>
      </SummaryCard>

      <SummaryCard background="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>
        <strong>R$ 1000,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}