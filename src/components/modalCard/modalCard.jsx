// import { Dispatch, SetStateAction } from "react";
// import { X } from "phosphor-react";

// import { Dialog } from "../Dialog";
// import { Button } from "../Button";
// import {
//   RulesPlanModalContainer,
//   RulesPlanModalHeader,
//   RulesPlanModalTitleContent,
//   RulesPlanModalTitle,
//   RulesPlanModalDescription,
//   RulesPlanModalButtonContainer,
// } from "./styles";

// interface RulesPlanModalProps {
//   rulesPlanOpen: boolean;
//   setRulesPlanOpen: Dispatch<SetStateAction<boolean>>;
// }

// export function RulesPlanModal({
//   rulesPlanOpen,
//   setRulesPlanOpen,
// }: RulesPlanModalProps) {
//   return (
//     <Dialog open={rulesPlanOpen} setOpen={setRulesPlanOpen}>
//       <RulesPlanModalContainer>
//         <RulesPlanModalHeader>
//           <button onClick={() => setRulesPlanOpen(false)}>
//             <X weight="bold" />
//           </button>
//         </RulesPlanModalHeader>

//         <RulesPlanModalTitleContent>
//           <img
//             decoding="async"
//             src="https://firebasestorage.googleapis.com/v0/b/graodegente-prod.appspot.com/o/produto%2Ficon-shipping-24h.webp?alt=media&token=652f6dc1-b4d3-4d28-aebe-263faaa5f1a5g"
//             alt="Selo chega rapidinho"
//             width={146}
//             height={34}
//           />
//         </RulesPlanModalTitleContent>

//         <RulesPlanModalDescription>
//           Produtos com o selo <span>envio em até 24h</span> são enviados em até{" "}
//           <span>24 horas</span> após a confirmação do pagamento.
//         </RulesPlanModalDescription>
//         <RulesPlanModalDescription
//           style={{
//             paddingBottom: "4rem",
//           }}
//         >
//           Além do prazo de envio do produto, lembre de contabilizar o tempo de
//           entrega para o <span>seu CEP</span>.
//         </RulesPlanModalDescription>

//         <RulesPlanModalButtonContainer>
//           <Button onClick={() => setRulesPlanOpen(false)}>Ok, entendi</Button>
//         </RulesPlanModalButtonContainer>
//       </RulesPlanModalContainer>
//     </Dialog>
//   );
// }
