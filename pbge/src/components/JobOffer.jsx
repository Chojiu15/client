/*                                                  *
 *             WILD CODE SCHOOL                      *
 *     v 1.0                                         *
 *                            author : Marc foix     *
 *****************************************************
 *  Ce fichier permet l'édition des informations     *
 *  récupérés sur la base de données de la table     *
 *  job Offer à partir du formulaire d'édition de    *
 *      l'entreprise                                 *
 *                                                   *
 ****************************************************/

import React from "react";
import { Link } from "react-router-dom";

export default function JobOffer({
  id,
  title,
  contractType,
  workingHours,
  experience,
  description
}) {
  return (
    <Link to={`/job_offers/${id}/edit`}>
      {title}
      {contractType}
      {workingHours}
      {experience}
      {description}
    </Link>
  );
}
