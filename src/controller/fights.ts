import { Request, Response } from "express";
import pool from "../config/db";

class FightController {
  static getAll = async (req: Request, res: Response) => {
    try {
      const fights = await pool.query("SELECT * FROM Fight");
      console.log(fights);

      res.status(200).json({ success: true, data: fights.rows });
    } catch (err) {
      // console.log(err.message);
      res.status(500).json({ success: false, error: "server error" + err });
    }
  };

  static getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.query;
      const fights = await pool.query(
        `
          select * from Fight where Fight.id=$1
          `,
        [id],
      );
      res.status(200).json({ success: true, data: fights.rows });
    } catch (error) {
      res.status(500).json({ success: false, error: "server error" + error });
    }
  };

  static create = async (req: Request, res: Response) => {
    try {
      const { age, first_name, weight, nationality } = req.body;
      const newFight = await pool.query(
        `
        insert into fight (age, first_name, weight, nationality) values ($1, $2, $3, $4) returning *
        `,
        [age, first_name, weight, nationality],
      );
      res.status(201).json({ success: true, data: newFight.rows });
    } catch (error) {
      res.status(500).json({ success: false, error: "server error" + error });
    }
  };

  // router.put("/:id", async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     const { name, degree, salary, job_id } = req.body;

  //     const oldEmployer = await pool.query(
  //       `
  //       select * from employer where id=$1
  //       `,
  //       [id],
  //     );

  //     const updatedEmployer = await pool.query(
  //       `
  //         update employer set name=$1, degree=$2, salary=$3, job_id=$4 where id=$5 returning *
  //         `,
  //       [
  //         name ? name : oldEmployer.rows[0].name,
  //         degree ? degree : oldEmployer.rows[0].degree,
  //         salary ? salary : oldEmployer.rows[0].salary,
  //         job_id ? job_id : oldEmployer.rows[0].job_id,
  //         id,
  //       ],
  //     );
  //     res.status(200).json({ success: true, employer: updatedEmployer.rows });
  //   } catch (error) {
  //     res.status(500).json({ success: false, error: error.message });
  //   }
  // });

  static delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedFight = await pool.query(
        `
          delete from Fight where id=$1 returning *
          `,
        [id],
      );
      res.status(200).json({ success: true, data: deletedFight.rows });
    } catch (error) {
      res.status(500).json({ success: false, error: error });
    }
  };
}

export default FightController;
