import { Request, Response } from "express";
import pool from "../config/db";

class FighterController {
  static getAll = async (req: Request, res: Response) => {
    try {
      const fighters = await pool.query("SELECT * FROM fighters");
      res.status(200).json({ success: true, data: fighters.rows });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: err });
    }
  };

  static create = async (req: Request, res: Response) => {
    try {
      const { date, location, fight_id_1 } = req.body;

      const newFighter = await pool.query(
        `
        insert into fighters (date, location, fight_card) values ($1, $2, $3) returning *
      `,
        [date, location, fight_id_1],
      );
      res.status(201).json({ success: true, job: newFighter.rows });
    } catch (error) {
      res.status(500).json({ success: false, error: error });
    }
  };

  static getById = async (req: Request, res: Response) => {
    try {
      const { id } = req.query;

      const isFighter = await pool.query(
        `
        select * from fighters where fighters.id=$1
      `,
        [id],
      );
      res.status(201).json({ success: true, job: isFighter.rows });
    } catch (error) {
      res.status(500).json({ success: false, error: error });
    }
  };

  // router.delete("/delete/:id", async (req, res) => {
  //   try {
  //     const { id } = req.params;
  //     await pool.query(
  //       `
  //     delete from employer where job_id=$1
  //     `,
  //       [id]
  //     );
  //     await pool.query(
  //       `
  //     delete from job where id=$1 returning *`,
  //       [id]
  //     );
  //     res.status(200).json({ success: true, job: [] });
  //   } catch (error) {
  //     res.status(500).json({ success: false, error: error.message });
  //   }
  // });
}
export default FighterController;
