import { db } from "@/db";
import { callsHistory } from "@/db/schema";
import { eq } from "drizzle-orm";

/**
 * Função para atualizar as informações da chamada.
 *
 * @param status (Novo status da chamada)
 * @param show (Váriavel para mostrar na tabela ou não)
 * @param linkedid (id da chamada)
 * @returns A chamada atualizada
 */

interface UpdateStatusProps {
  linkedid: string;
  status: string;
  show: boolean;
  exten: string;
}

export const updateStatus = async (props: UpdateStatusProps) => {
  const { linkedid, status, show, exten } = props;

  console.log(`Exten: ${exten}`);

  try {
    const updateData: {
      status: string;
      showOnPanel: boolean;
      exten: string;
      holdTime?: string;
    } = {
      status: status,
      showOnPanel: show,
      exten: exten,
    };

    const response = await db
      .update(callsHistory)
      .set(updateData)
      .where(eq(callsHistory.linkId, linkedid));

    if (response) {
      console.log("Chamada atualizada no banco de dados.");
      return response;
    } else {
      console.warn(
        "Não foi possível atualizar a chamada. Provavelmente essa chamada não foi adicionada no momento da ligação",
      );
      return null;
    }
  } catch (error) {
    // if (error instanceof Prisma.PrismaClientKnownRequestError) {
    //   console.error('Essa chamada não existe no banco')
    // } else {
    //   console.error(`Erro ao atualizar chamada: ${error}`)
    // }
  }
};
